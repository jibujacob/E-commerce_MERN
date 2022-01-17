import { currentUser, errorHandler, NotFoundError } from "@jjecommerce2022/common";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { createOrderRouter } from "./routes/createOrder";
import { deleteOrderRouter } from "./routes/deleteOrder";
import { getAllCartsRouter } from "./routes/getAllOrders";
import { getMonthlyIncomeRouter } from "./routes/getMonthlyIncome";
import { getUserOrderRouter } from "./routes/getUserOrders";
import { updateOrderRouter } from "./routes/updateOrder";
import {stripeRouter} from "./routes/stripe";

const app = express();
app.set("trust proxy",true);

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieSession({
    signed:false,
    secure: false//process.env.NODE_ENV !== "test",
}));

app.use(currentUser);

app.use(createOrderRouter);
app.use(updateOrderRouter);
app.use(deleteOrderRouter);
app.use(getUserOrderRouter);
app.use(getAllCartsRouter);
app.use(getMonthlyIncomeRouter);
app.use(stripeRouter);

app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}