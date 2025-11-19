import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();


app.use(cors({
    origin: [
        "http://localhost:5173",     // Vite client (dev)
        "https://yourdomain.com",    // Production client
    ],
    credentials: true
}));


app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16 kb' }));
app.use(express.static("public"));
app.use(cookieParser())

//import routes
import userRouter from './routes/user.routes.js' //you can rename the imported data if its exported as default
import subscriptionRouter from './routes/subscription.routes.js'
import videoRouter from "./routes/video.routes.js"
import likeRouter from "./routes/like.routes.js"
//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/like", likeRouter)
app.get("/", (req, res) => {
    res.send(JSON.stringify({ omar: "hello", police: "yeah" }))
})
app.use((err, req, res, next) => {
    console.log("ERROR:", err); // debug

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error",
    });
});

export { app }