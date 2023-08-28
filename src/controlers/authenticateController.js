const authenticateService = require("../services/authenticateService");
const {User} = require("../database_v1/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    try {
        await authenticateService.login(req, res);
    } catch (error) {
        return res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const forgetPassword = async (req, res) => {
    try {
        await authenticateService.forgetPassword(req, res);
    } catch (error) {
        return res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const register = async (req, res) => {
    try {
        const user = await authenticateService.register(req, res);
        return res.status(200).send({ status: "OK", message: "User was registered successfully!" , data: user});
    } catch (error) {
        return res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const logout = (req, res) => {
    const allGifts = authenticateService.logout();
    res.send({ status: "OK", data: allGifts });
};

module.exports = {
    register,
    login,
    logout,
    forgetPassword
}