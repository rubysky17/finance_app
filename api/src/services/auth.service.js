const crypto = require('crypto');
const bcrypt = require("bcrypt");

const UserValidate = require("../validate/user.validate");
const { UserModel } = require("../models/user.model");
const KeytokenService = require("./keytoken.service");
const { ConflictRequestError } = require("../core/error.response");
const { createJWTWithKeys } = require("../utils/auth.utils");
const { getInfoData } = require("../utils");

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
}

module.exports = AuthService;