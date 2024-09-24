const { Router } = require("express")
const adminRouter = Router()
const { adminMiddleware } = require("../middleware/admin")
const { AdminModel, courseModel } = require("../db");
const {z} = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { JWT_ADMIN_PASSWORD} = require("../config")


adminRouter.post("/signup", async function(req, res) {  
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        password: z.string().min(3).max(10)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        res.status(406).json({
            message:"incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const { email, password, firstName, lastName } = req.body; 

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await AdminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName, 
            lastName: lastName
        })
        
        res.json({
            message: "Signup succeeded"
        })

    } catch(err) {
        console.log("error with admn signup", err)

        res.json({
            message: "Internal server error"
        })
    }
    
})


adminRouter.get('/signin', async function(req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(10)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)
    if (!parsedDataWithSuccess.success) {
        res.status(406).json({
            message:"incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const { email, password } = req.body
    
    const admin = await AdminModel.findOne({
        email: email,
    });
    console.log("admin =", admin)
    const passwordMatch = bcrypt.compare(password, admin.password)


    if(admin && passwordMatch) {
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD)

        // TODO: Do cookie logic
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminid = req.adminid
    const {title, description, price, imageUrl} = req.body;
    const course = await courseModel.create({
        title: title, 
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminid
    })

    // Create a web3 Saas in 6 hours has logic for uploading images
    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/update/{courseid}", adminMiddleware, async function(req, res) {
    const adminId = req.userId
    const {title, description, price, imageUrl,courseId} = req.body;
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title, 
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    // Create a web3 Saas in 6 ourss for uploading images
    res.json({
        message: "course updated",
        courseId: course._id
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