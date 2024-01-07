const { Schema, model } = require('mongoose');


const COLLECTION_NAME = "Users";
const DOCUMENT_NAME = "User";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    isVerify: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamp: true,
    collection: COLLECTION_NAME
})

const UserModel = model(DOCUMENT_NAME, userSchema);

module.exports = {
    UserModel,
    userSchema
}