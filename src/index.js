import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';


import { userRouter} from  './routes/users.js';
import { recipesRouter} from  './routes/recipes.js';

const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes",  recipesRouter);

mongoose.connect("mongodb+srv://PRANITA:anushka@cluster0.1gufhdp.mongodb.net/Cluster0?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("CONNECTION SUCCESSFUL");
}).catch((e) =>{
    console.log(e);
});
app.listen(port, () => console.log("SERVER STARTED!"));