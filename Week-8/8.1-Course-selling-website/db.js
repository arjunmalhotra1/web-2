const mongoose = require("mongoose")


const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})


const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
  courseId: ObjectId, // TODO: This course ID needs to refer the courseId of the course schema.
  userId: ObjectId
})

const UserModel = mongoose.model('users', userSchema);
const AdminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    UserModel: UserModel,
    AdminModel: AdminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel,
}