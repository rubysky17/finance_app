const { KeyTokenModel } = require("../models/keytoken.model");
const { Types } = require("mongoose")

class KeyTokenService {
    async generateToken(
        { publicKey, privateKey, userId, refreshToken }
    ) {
        try {
            const filter = {
                userId
            };

            const update = {
                publicKey,
                privateKey,
                refreshTokenUsed: [],
                refreshToken,
            }

            const options = {
                upsert: true, new: true
            }

            const tokens = await KeyTokenModel.findOneAndUpdate(filter, update, options);

            return tokens ? tokens.publicKey : null;
        } catch (error) {

        }
    }

    async deleteToken(keyStore) {
        const _id = new Types.ObjectId(keyStore._id);

        await KeyTokenModel.removeToken(_id)
    }
}

module.exports = new KeyTokenService();