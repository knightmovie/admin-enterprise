const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../database_v1/models/User");
const Admin = require("../database_v1/models/Admin");
const AuthConfig = require("../config/auth.config");


const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Admin.findOne({username: username});
        if (!user) return res.status(401).send({ status: "FAIL", message: "Username not found!", accessToken: null });
        const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                status: "FAIL",
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        const token = jwt.sign({ user: user },
            AuthConfig.secret,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 30, // 24 hours
            });


        return res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            name: user.name,
            accessToken: token
        });
    } catch (error) {
        throw error;
    }
};

const register = async (req, res) => {
    const user  = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    };
    try {
        let result = await Admin.create(user)
        result = result.toObject();
        return {
            name: result.name,
            email: result.email,
            username: result.username
        }
    } catch (error) {
        throw error;
    }
};
//
// const forgetPassword = async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({email: email});
//         if (!user) {
//             return res.status(401).send({ status: "FAIL", message: "Incorrect email address!" });
//         }
//         const token = jwt.sign({ user: user },
//             AuthConfig.secret,
//             {
//                 algorithm: 'HS256',
//                 allowInsecureKeySizes: true,
//                 expiresIn: 30, // 24 hours
//             });
//
//         await AuthUser.deleteMany({email: email});
//         const auth = {
//             email: email,
//             token: token
//         }
//         await AuthUser.create(auth);
//         return res.status(200).send({ status: "SUCCESS", message: "Correct email address!", data: auth });
//     } catch (error) {
//         throw error;
//     }
// };

const logout = () => {
    // return Authenticate.logout();
};


module.exports = {
    register,
    login,
    // logout,
    // forgetPassword
}