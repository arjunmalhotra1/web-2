const { Router } = require("express")
const courseRouter = Router()
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require('../middleware/user')
const {z} = require("zod")

// user purchasing a course
courseRouter.post('/purchase',userMiddleware, async function(req, res) {

    const requiredBody = z.object({
        courseId: z.string().min(3).max(30)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)
    if (!parsedDataWithSuccess.success) {
        res.status(404).json({
            message: parsedDataWithSuccess.error      
        })
    }
    const userId = req.userid;
    const courseId = req.body.courseId;

   const purchased =  await purchaseModel.create({
        userId,
        courseId
    })

    // TODO: Handle payment & Handle error for if the course with provided courseId is not found.
    if (purchased) {
        res.json({
            message: "you have successfully bought the course"
        })
    } else {
        res.status(500).json({
            message: "the request couldn't be completed"
        })
    }
    

})

courseRouter.get('/preview',async function(req, res) {
    const courses = await courseModel.find({});

    res.json({
        courses
    })
})


module.exports = {
    courseRouter: courseRouter
}