const { KeyTokenModel } = require("../models/keytoken.model");

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
}

module.exports = new KeyTokenService();