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

            const keyStore = await KeytokenService.generateToken({ publicKey, privateKey, userId: newUser._id });

            if (!keyStore) {
                throw new ConflictRequestError("Key store was\'t created!")
            } else {
                const JWTCreated = await createJWTWithKeys(
                    { userId: newUser._id, email },
                    publicKey,
                    privateKey
                );

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
}

module.exports = AuthService;