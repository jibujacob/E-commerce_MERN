import { errorHandler, NotFoundError } from "@jjecommerce2022/common";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import cookieSession from 'cookie-session';

import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { currentUserRouter } from "./routes/current-user";


const app = express();
app.set("trust proxy",true);

app.use(express.json());
app.use(helmet());
app.use(
    cookieSession({
      signed: false,
      // secure: process.env.NODE_ENV !== 'test',
      secure: false,
    })
  );


app.use(registerRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(currentUserRouter);


app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}