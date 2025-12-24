const {Schema, model }= require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        maxlength: 50
    },
    department: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    designation: {
        type: String,
        trim: true,
        required: false,
        maxlength: 100
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { message: "Invalid email format" }
        ]
    },
    contactNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [
            /^\+?[0-9]{10,15}$/,
            { message: "Invalid phone number" }
        ]
    },
    employeeId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    organization: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    staffIdProof: {
        type: String, // will store uploaded file URL or path
        required: false,
    },
    dateOfJoining: {
        type: Date,
        required: false
    },
    roleType: {
        type: String,
        enum: ["Staff", "Admin", "Professor", "Other"],
        default: "Staff"
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps : true})

//password encryption
UserSchema.pre('save', async function(next) {
    const encryptedPassowrd = await bcrypt.hash(this.password.toString(), 12)
    this.password = encryptedPassowrd
    next()
})

const UserModel = model('User', UserSchema)



module.exports = UserModel