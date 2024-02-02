import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import commentsRoute from "./routes/commentsRoute.js";
import cors from "cors";
import multer from "multer";
import bodyParser from"body-parser";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";

// Configurations 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// File storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "modules/images");
    },
    filename: function (req,res,cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowHeaders: ["Content-Type"], 
    })
);

// Routes
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send('HELOOOO');
});

// Routes for register
app.post("/register", register);

app.use("/comments", commentsRoute);


// Mongoose setup
const port = process.env.PORT;
const mongodbURL = process.env.MONGODBURL;
mongoose
    .connect(mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('db conectée');
        app.listen(port, () => {
            console.log(`The server is running on port: ${ port }`);
        });
    })
    .catch((error) => {
        console.log(error);
});
