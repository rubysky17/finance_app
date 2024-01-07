// * Library
const crypto = require('crypto');
const bcrypt = require("bcrypt");

// * validate and utils, helper
const UserValidate = require("../validate/user.validate");
const { getInfoData } = require("../utils");
const { createJWTWithKeys, verifyJWT } = require("../utils/auth.utils");

// * other services
const KeytokenService = require("./keytoken.service");

// * Other Models
const { UserModel } = require("../models/user.model");

// * Error , Success handler
const { ConflictRequestError, ForbiddenError, AuthFailureError } = require("../core/error.response");


const saltRounds = 10;

class AuthService {
    static signup = async (body) => {
        // * Validation data
        const { email, username, password } = await UserValidate.checkRegisterInfo(body);

        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await UserModel.create({
            email, username, password: hashPassword
        });

        if (newUser) {
            const { publicKey, privateKey } = await crypto.generateKeyPairSync('rsa', {
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: "pkcs1",
                    format: "pem",
                },
                privateKeyEncoding: {
                    type: "pkcs1",
                    format: "pem",
                }
            })

            const JWTCreated = await createJWTWithKeys(
                { userId: newUser._id, email },
                publicKey,
                privateKey
            );

            const keyStore = await KeytokenService.generateToken({ publicKey, privateKey, userId: newUser._id, refreshToken: JWTCreated.refreshToken });

            if (!keyStore) {
                throw new ConflictRequestError("Key store was\'t created!")
            } else {


                const shopResult = {
                    shop: getInfoData({
                        object: newUser, fields: ["_id", "username", "email"]
                    }),
                    tokens: JWTCreated
                }

                return shopResult
            }
        }

        return {
            code: 200,
            metadata: null,
        };
    }

    static login = async (body) => {
        // * Validation data
        const { email, password } = await UserValidate.checkLoginInfo(body);

        const findUser = await UserModel.findOne({
            email: body.email
        }).lean();

        if (!findUser) {
            throw new ConflictRequestError("User not found!")
        };

        const comparePassword = await bcrypt.compare(body.password, findUser.password);

        if (!comparePassword) {
            throw new ConflictRequestError("Password not correct!")

        } else {
            const { publicKey, privateKey } = await crypto.generateKeyPairSync('rsa', {
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: "pkcs1",
                    format: "pem",
                },
                privateKeyEncoding: {
                    type: "pkcs1",
                    format: "pem",
                }
            });

            const JWTCreated = await createJWTWithKeys(
                { userId: findUser._id, email },
                publicKey,
                privateKey,
            );

            await KeytokenService.generateToken({ publicKey, privateKey, userId: findUser._id, refreshToken: JWTCreated.refreshToken });

            const shopResult = {
                shop: getInfoData({
                    object: findUser, fields: ["_id", "username", "email"]
                }),
                tokens: JWTCreated
            }

            return shopResult
        }
    }

    static logout = async (keyStore) => {
        return await KeytokenService.deleteToken(keyStore);
    }

    static handleRefreshToken = async (refreshToken) => {
        const findTokenUsed = await KeytokenService.findRefreshTokenUsed(refreshToken);

        if (findTokenUsed) {
            const { userId } = await verifyJWT(refreshToken, findTokenUsed.privateKey);

            await KeytokenService.deleteByUserId(userId);

            // throw new ForbiddenError("Can't delete by userId!");
        }

        const currentToken = await KeytokenService.findByRefreshToken(refreshToken);

        if (!currentToken) throw new AuthFailureError("Not find currentToken in DB");

        const { userId, email } = await verifyJWT(
            refreshToken,
            currentToken.privateKey
        );

        const newTokens = await createJWTWithKeys(
            {
                userId,
                email,
            },
            currentToken.publicKey,
            currentToken.privateKey
        );

        await currentToken.updateOne({
            $set: {
                refreshToken: newTokens.refreshToken,
            },
            $addToSet: {
                refreshTokenUsed: refreshToken,
            },
        });

        return {
            user: { userId, email },
            newTokens,
        };
    }
}

module.exports = AuthService;