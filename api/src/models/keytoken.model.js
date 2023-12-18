const { Schema, model } = require('mongoose');


const COLLECTION_NAME = "Keys";
const DOCUMENT_NAME = "Key";

const { Types } = Schema;

const keytokenSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true
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

const KeyTokenModel = model(DOCUMENT_NAME, keytokenSchema);


module.exports = {
    KeyTokenModel,
    keytokenSchema
}