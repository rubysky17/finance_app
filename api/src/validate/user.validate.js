const { ConflictRequestError } = require("../core/error.response");
const { UserModel } = require("../models/user.model")

const NAME_REGEX = /\w{1,50}/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const NAME_INVALID = 'Tên không hợp lệ';
const EMAIL_INVALID = 'Email không đúng định dạng';
const ACCOUNT_WAS_EXISTED = 'Tài khoản đã tồn tại';
const PASSWORD_INVALID = 'Mật khẩu phải bao gồm 1 ký tự đặt biệt, 1 ký tự viết thường, 1 ký tự viết thường và ít nhất 8 ký tự'

class UserValidate {
    passwordValidate(password) {
        if (!password || !password.length || password.match(PASSWORD_REGEX)) throw new ConflictRequestError(PASSWORD_INVALID);
    };

    async checkRegisterInfo(userInfo) {

        const { email, username, password } = userInfo;

        if (!username || !NAME_REGEX.test(username)) throw new ConflictRequestError(NAME_INVALID);

        if (!email || !email.toLowerCase().match(EMAIL_REGEX)) throw new ConflictRequestError(EMAIL_INVALID);

        const isExistUser = await UserModel.findOne({
            email
        }).lean();

        if (isExistUser) throw new ConflictRequestError(ACCOUNT_WAS_EXISTED);

        this.passwordValidate(password);

        return { email, username, password }
    }

    async checkLoginInfo(userInfo) {
        const { email, password } = userInfo;

        if (!email || !email.toLowerCase().match(EMAIL_REGEX)) throw new ConflictRequestError(EMAIL_INVALID);

        this.passwordValidate(password);

        return { email, password }
    }
}

module.exports = new UserValidate();