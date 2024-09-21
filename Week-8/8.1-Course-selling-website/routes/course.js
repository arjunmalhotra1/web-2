const { Router } = require("express")
const courseRouter = Router()

// user purchasing a course
courseRouter.post('/purchase',function(req, res) {
    
    // you would expect the user to pay you money
    res.json({
        message: "course purchase endpoint"
    })

})

courseRouter.get('/preview',function(req, res) {
    res.json({
        message: "course preview"
    })
})


module.exports = {
    courseRouter: courseRouter
}