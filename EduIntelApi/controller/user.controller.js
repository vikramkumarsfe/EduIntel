import UserModel from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

export const signup = async (req, res) => {
    try {
            //    if (!req.file) {
            //     return res.status(400).json({ message: "Please Upload ID" });
            // }

            // const b64 = Buffer.from(req.file.buffer).toString("base64");
            // const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

            // // Upload to Cloudinary
            // result = await cloudinary.uploader.upload(dataURI, {
            //     folder: "filemoon",      // optional folder
            //     resource_type: "auto"     // allows pdf, images, videos, etc.
            // });

            const payload = {
            fullname: req.body.fullname,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            department: req.body.department,
            designation: req.body.designation,
            employeeId: req.body.employeeId,
            organization: req.body.organization,
            dateOfJoining: req.body.dateOfJoining,
            roleType: req.body.roleType,
            isVerified: req.body.isVerified,
            password : req.body.password,
        }
        const user = await UserModel.create(payload)
        
        res.status(200).json(user)
        }
        catch( err) {
            res.status(500).json({ message : err.message})
        }
}


export const login = async(req, res) =>{
    try {
        const { email , password, role } = req.body;
        const user = await UserModel.findOne({ email : email})

        if(!user)
        {
            return res.status(404).json({ message : " User does not exists!"})
        }

        const isLogin = bcrypt.compareSync( password, user.password)

        if(!isLogin)
        {
            return res.status(401).json({ message : " password is incorrect "})
        }

        if(user.roleType != role)
        {
            return res.status(500).json({message : "role is incorrect"})
        }

        if(!user.isVerified)
        {
            return res.status(500).json({message : "Account is not verified"})
        }

        const payload = {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            mobile: user.contactNumber,
            department: user.department,
            designation: user.designation,
            employeeId: user.employeeId,
            organization: user.organization,
            dateOfJoining: user.dateOfJoining,
            roleType: user.roleType,
            isVerified: user.isVerified,
            staffIdProof: user.staffIdProof
        };

        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : '7d' })

        res.status(200).json({
            message : "Login Success!!",
            token : token
        })
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}