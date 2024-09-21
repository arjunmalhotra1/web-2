const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";


function auth(req, res, next) {
    const token = req.headers.token
    const response = jwt.verify(token, JWT_SECRET)

    if (response) {
        req.userId = response.userId
        next()
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}