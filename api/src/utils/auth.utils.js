const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");
const { AuthFailureError } = require("../core/error.response")
const { KeyTokenModel } = require("../models/keytoken.model")

const REQUEST_HEADER = {
    USER_ID: "x-user-id",
    AUTHORIZATION: "authorization"
}

const createJWTWithKeys = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = jwt.sign(payload, privateKey, {
            expiresIn: "2 days",
            algorithm: 'RS256'
        });

        const refreshToken = jwt.sign(payload, privateKey, {
            expiresIn: '7 days',
            algorithm: 'RS256'
        });

        return {
            accessToken,
            refreshToken,
        };
    } catch (error) {
        return {
            code: "Error_XXX",
            message: error.message,
            status: "error",
        };
    }
}

const asyncHandler = (fn) => {
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    };
}

const authentication = asyncHandler(async (req, res, next) => {
    const { headers } = req;
    const userId = headers[REQUEST_HEADER.USER_ID];
    const getAccessToken = headers[REQUEST_HEADER.AUTHORIZATION];

    if (!userId) throw new AuthFailureError("không tìm thấy user");
    if (!getAccessToken) throw new AuthFailureError("không tìm thấy access_token trên headers");

    let payload = new Types.ObjectId(userId)

    const keyStore = await KeyTokenModel.findByUser(payload);

    if (!keyStore) throw new AuthFailureError("không tìm thấy token của user");


    if (!getAccessToken) throw new AuthFailureError("không tìm thấy access_token của user");

    try {
        const decodeuser = await jwt.verify(getAccessToken, keyStore.publicKey);

        if (!decodeuser) throw new AuthFailureError("Token sai!");

        if (userId !== decodeuser.userId) throw new AuthFailureError("Sai userId");

        req.keyStore = keyStore;

        return next();
    } catch (error) {
        throw new AuthFailureError("Đã xảy ra lỗi trong lúc truy vấn");
    }
})

const verifyJWT = async (refreshToken, secretKey) => {
    return await jwt.verify(refreshToken, secretKey);
}

module.exports = {
    createJWTWithKeys,
    asyncHandler,
    authentication,
    verifyJWT
};