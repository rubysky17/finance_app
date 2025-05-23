const { Schema, model } = require('mongoose');


const COLLECTION_NAME = "Keys";
const DOCUMENT_NAME = "Key";

const { Types } = Schema;

const keytokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    privateKey: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    refreshTokenUsed: {
        type: Array,
        default: []
    },
    refreshToken: {
        type: String,
        required: true
    }
}, {
    timestamp: true,
    collection: COLLECTION_NAME
})

keytokenSchema.statics.findByUser = async (userId) => {
    return await KeyTokenModel.findOne({ userId }).lean();
}

keytokenSchema.statics.removeToken = async (id) => {
    return await KeyTokenModel.findOneAndDelete(id);
}

keytokenSchema.statics.findByRefreshTokenUsed = async (refreshToken) => {
    return await KeyTokenModel.findOne({
        refreshTokenUsed: refreshToken
    }).lean();
}

keytokenSchema.statics.findByRefreshToken = async (refreshToken) => {
    return await KeyTokenModel.findOne({
        refreshToken
    });
}

const KeyTokenModel = model(DOCUMENT_NAME, keytokenSchema);


module.exports = {
    KeyTokenModel,
    keytokenSchema
}