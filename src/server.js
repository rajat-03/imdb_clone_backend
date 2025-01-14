import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/index.js";
import routes from "./routes/index.js"

const app = express();

dotenv.config()
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(routes);

const port = process.env.PORT || 5000;

connectDB()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((error)=>{
        console.error("Failed to connect to MongoDB",error)
    })

