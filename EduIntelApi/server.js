import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { login, signup } from './controller/user.controller.js'
dotenv.config()

import mongoose from 'mongoose'
import { chatHistory, newChat, Chat } from './controller/chat.controller.js'

mongoose.connect(process.env.DB)
.then(()=>{console.log("DB connected successfully ")})
.catch((err)=>{console.log(err.message)})

import { v2 as cloudinary } from "cloudinary";
import { v4 as uniqueId } from "uuid";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

import multer from "multer"

const upload = multer({
    storage : multer.memoryStorage(),
    limits : {
        filesize : 10 * 1000 * 1000
    }
})

const app = express()
app.use(cors({ origin: '*' })) 
app.listen(process.env.PORT || 8080)
app.use(express.json())
app.use(express.urlencoded({ extende : false }))


app.post('/signup',upload.single('file'), signup)
app.post('/login', login)
app.post('/new-chat', newChat);
app.post('/chat', Chat);
app.get('/chat-history/:userId', chatHistory);