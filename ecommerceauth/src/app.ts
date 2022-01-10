import { currentUser, errorHandler, NotFoundError } from "@jjecommerce2022/common";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import cookieSession from 'cookie-session';

import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { currentUserRouter } from "./routes/current-user";
import { updateUserRouter } from "./routes/update";
import { deleteUserRouter } from "./routes/delete";
import { getUserRouter } from "./routes/getUser";
import { getAllUserRouter } from "./routes/getAllUsers";
import { userStatsRouter } from "./routes/userStats";


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

  app.use(currentUser);

app.use(registerRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(currentUserRouter);

app.use(updateUserRouter);
app.use(deleteUserRouter);
app.use(getUserRouter);
app.use(getAllUserRouter);
app.use(userStatsRouter);


app.all("*",async()=>{
    throw new NotFoundError();
});
app.use(errorHandler);


export {app}