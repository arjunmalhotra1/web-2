const { Router } = require("express")
const courseRouter = Router()
const { purchaseModel } = require("../db");
const { userMiddleware } = require('../middleware/user')

// user purchasing a course
courseRouter.post('/purchase',userMiddleware, async function(req, res) {
    
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })


    // you would expect the user to pay you money
    res.json({
        message: "you have successfully bought the course"
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