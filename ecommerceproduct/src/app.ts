import { currentUser, errorHandler, NotFoundError } from "@jjecommerce2022/common";
import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import helmet from "helmet";
import morgan from "morgan";
import { createProductRouter } from "./routes/createProduct";
import { updateProductRouter } from "./routes/updateProduct";
import { deleteProductRouter } from "./routes/deleteProduct";
import { getAllProductsRouter } from "./routes/getAllProducts";
import { getAProductsRouter } from "./routes/getAProduct";


const app = express();
app.set("trust proxy",true);

app.use(express.json());
app.use(helmet());
app.use(cookieSession({
    signed:false,
    secure: false//process.env.NODE_ENV !== "test",
}));

app.use(currentUser);

app.use(createProductRouter);
app.use(updateProductRouter);
app.use(deleteProductRouter);
app.use(getAllProductsRouter);
app.use(getAProductsRouter);



app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}