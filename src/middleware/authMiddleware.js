const jwt = require('jsonwebtoken');
const AuthConfig = require("../config/auth.config");
const User = require("../database_v1/models/User");

const checkDuplicateRegister = async (req, res, next) => {
    try {
        const user =  await User.findOne({
            username: req.body.username
        })
        if (user) {
            return res.status(400).send({ message: "Username is already exist!" });
        }

        const email = await User.findOne({
            email: req.body.email
        });

        if (email) {
            return res.status(400).send({ message: "Email is already exist!" });
        }

    } catch (error) {
        return res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
    next();
}

const verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization || req.headers.Authorization;
        if (!authorization?.startsWith("Bearer ")) {
            return res.status(403).send({ status: "FAIL", message: "Missing Authentication Token" })
        }
        const token = authorization.split(" ")[1];
        await jwt.verify(token, AuthConfig.secret, (err, decodedToken) => {
            if (err) {
                return res.status(403).send({ status: "FAIL", message: "Unauthorized!" })
            } else {
                next();
            }
        });
    } catch {
        res.status(401).send({ status: "FAILED", data: { error: 'Invalid request!' } });
    }
};

module.exports = {
    verifyToken,
    checkDuplicateRegister
}