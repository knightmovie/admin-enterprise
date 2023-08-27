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

module.exports = {
    checkDuplicateRegister
}