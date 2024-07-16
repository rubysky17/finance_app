const { Schema, model } = require('mongoose');

const COLLECTION_NAME = "Wallets";
const DOCUMENT_NAME = "Wallet";

const walletSchema = new Schema({
    wallet_name: {
        type: String,
        required: true
    },
    wallet_type: {
        type: String,
        required: true,
        enum: ['cash', 'bank', 'credit', 'invest', 'digital_wallet', 'other'] // Loại ví sử dụng
    },
    wallet_description: {
        type: String,
    },
    wallet_balance: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger, // Giá phải là số nguyên
            message: '{VALUE} is not an integer value for price'
        }
    },
    wallet_currency: {
        type: String,
        required: true,
        enum: ['USD', 'EUR', 'GBP', 'VND'] // Kiểm tra loại tiền tệ
    },
    wallet_is_active: {
        type: Boolen,
        required: true,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId, ref: "User"
    }
}, {
    timestamp: true,
    collection: COLLECTION_NAME
})

const WalletModel = model(DOCUMENT_NAME, walletSchema);

module.exports = {
    WalletModel,
    walletSchema
}