import { errorHandler, NotFoundError } from "@jjecommerce2022/common";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";


const app = express();
app.set("trust proxy",true);

app.use(express.Router());



app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}