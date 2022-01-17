import { NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../models/user";

const router = express.Router();


router.get("/api/users/analytics/stats", requireAuth , async (req:Request,res:Response) => {
    //@ts-ignore
    if(!req.currentUser?.isAdmin){
        throw new NotAuthorizedError();
    }

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(StatusCodes.OK).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
})

export {router as userStatsRouter}