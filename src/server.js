import { config } from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './Config/db.config';
import express from "express";
import RegisterRoute from './Routes/Register';
import CreatePostRoute from './Routes/Post';
import CreateCommentRoute from './Routes/Comment'

config();

const app = express();
const PORT = process.env.PORT || 5678;

//Connect to MongoDB
connectDB();

//Routes
app.use(RegisterRoute);
app.use(CreatePostRoute);
app.use(CreateCommentRoute);


//Only listen after the app connects to MongoDB
mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    
    app.listen(PORT, ()=>{
        console.log(`Server started on PORT ${PORT}`)
    })
})
