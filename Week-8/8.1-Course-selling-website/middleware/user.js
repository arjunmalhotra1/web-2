const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")


function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD)
    if (decoded) {
        req.userid = decoded.userid;
        next()
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    userMiddleware
}



