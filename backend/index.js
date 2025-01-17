import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js"
import cors from "cors";
dotenv.config({
    path:".env"
})
databaseConnection();
const app = express();


app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

app.listen(process.env.PORT, ()=> {
    console.log(`listening at port ${process.env.PORT}`);
})