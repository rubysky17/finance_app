const jwt = require("jsonwebtoken");

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

module.exports = {
    createJWTWithKeys
};