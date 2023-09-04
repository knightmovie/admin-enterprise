const authenticateService = require("../services/adminAuthService");


const login = async (req, res) => {
    try {
        await authenticateService.login(req, res);
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

module.exports = {
    login,
    register
}