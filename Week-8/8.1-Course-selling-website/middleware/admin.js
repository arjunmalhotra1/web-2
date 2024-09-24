const { JWT_ADMIN_PASSWORD } = require("../config")
const jwt = require("jsonwebtoken")


function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD)

    if (decoded) {
        req.adminid = decoded.id
        next()
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    adminMiddleware
}