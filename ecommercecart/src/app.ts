import { currentUser, errorHandler, NotFoundError } from "@jjecommerce2022/common";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import { createCartRouter } from "./routes/createCart";
import { deleteCartRouter } from "./routes/deleteCart";
import { getAllCartsRouter } from "./routes/getAllCarts";
import { getUserCartRouter } from "./routes/getUserCart";
import { updateCartRouter } from "./routes/updateCart";


const app = express();
app.set("trust proxy",true);

app.use(express.json());
app.use(helmet());
app.use(cookieSession({
    signed:false,
    secure: false//process.env.NODE_ENV !== "test",
}));

app.use(currentUser);

app.use(createCartRouter);
app.use(updateCartRouter);
app.use(deleteCartRouter);
app.use(getUserCartRouter);
app.use(getAllCartsRouter);


app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}