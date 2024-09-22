const { Router } = require("express")
const adminRouter = Router()
const { adminModel, courseModel } = require("../db");
const {z} = require("zod")

const { JWT_ADMIN_PASSWORD} = require("../config")


adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body; 
    // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})


// adminRouter.post('/signup',function(req, res) {
//     const requiredBody = z.object({
//         email: z.string().min(3).max(100).email(),
//         name: z.string().min(3).max(100),
//         password: z.string().min(3).max(10)
//     })

//     const parsedDataWithSuccess = requiredBody.safeParse(req.Body)

//     if (!parsedDataWithSuccess.success) {
//         res.json({
//             message: "incorrect format",
//             error: parsedDataWithSuccess.error
//         })
//         return
//     }

//     // const { email, password, firstName, lastName} = req.Body
//     // const hasedPassword = await bcrypt.hash(password, 10);
    





    
// })

adminRouter.get('/signin',async function(req, res) {
    const { email, password } = req.Body
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if(admin) {
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD)

        // TODO: Do cookie logic

        res.json({
            message: "admin endpoint"
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
    
})


// adminRouter.use(adminMiddleware)

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId
    const {title, description, price, imageUrl} = req.body;
    const course = await courseModel.create({
        title: title, 
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    // Create a web3 Saas in 6 ourss for uploading images
    res.json({
        message: "course endpoint",
        courseId: course._id
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}