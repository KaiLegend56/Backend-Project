import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16 kb'}));
app.use(express.static("public"));
app.use(cookieParser())

//import routes
import userRouter from './routes/user.routes.js' //you can rename the imported data if its exported as default
import subscriptionRouter from './routes/subscription.routes.js' 
import videoRouter from "./routes/video.routes.js"
import likeRouter from "./routes/like.routes.js"
//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/like",likeRouter)
export {app}