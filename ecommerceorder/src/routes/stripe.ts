import { requireAuth } from "@jjecommerce2022/common";
import express ,{Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { stripe } from "../stripe";

const router = express.Router();

/* Old Logic */
// router.post("/api/payments",
//         // requireAuth,
//         async(req:Request,res:Response)=>{

//      const stripeCharge = await stripe.charges.create({
//          currency:"INR",
//          amount: req.body.amount,
//          source: req.body.tokenId,
//          description:"Test"
//      })

//      res.status(StatusCodes.OK).send(stripeCharge);
// })

/* New Logic */
router.post("/api/payments",
        requireAuth,
        async(req:Request,res:Response)=>{

    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'Invoice',
              },
              unit_amount: req.body.amount,
            },
            quantity: req.body.quantity,
          },
        ],
        mode: 'payment',
        success_url: 'http://www.test-app-jpj-prod.xyz/success',
        cancel_url: 'http://www.test-app-jpj-prod.xyz/cancel',
        // success_url: 'http://ecommercejj.dev/success',
        // cancel_url: 'http://ecommercejj.dev/cancel',

      });
     
      res.send({session});
})

export {router as stripeRouter}