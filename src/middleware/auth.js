const jwt = require('jsonwebtoken');
const giftService = require("../services/giftService");

// const auth = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//         const userId = decodedToken.userId;
//         if (req.body.userId && req.body.userId !== userId) {
//             throw 'Invalid user ID';
//         } else {
//             next();
//         }
//     } catch {
//         res.status(401).json({
//             error: new Error('Invalid request!')
//         });
//     }
// };

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        // res.status(401).json({
        //     error: new Error('Invalid request!')
        // });

        res.status(401).send({ status: "FAILED", data: { error: 'Invalid request!' } });
    }
};

module.exports = {
    auth
}