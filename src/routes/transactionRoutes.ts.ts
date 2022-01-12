import express, { Request, Response, NextFunction, response } from "express";
import * as transferController from "../controllers/transferController";

const router = express.Router();

//  New User registration routes

router.post("/register", transferController.registerUser);

// user login route
router.post("/login", transferController.userLogin);

//fund transfer routing

router.post("/transfer", transferController.fundTransfer);

//deposit fund

router.post("/deposit", transferController.depositFund);

//get user balance by account number
router.get("/balance/:accountnumber", transferController.getUserBalance);

//get user balance by account number
router.get(
  "/transaction/:accountnumber",
  transferController.getTransactionOfUser
);

//get user  debit transaction
router.get(
  "/transaction/debit/:accountnumber",
  transferController.getUserDebit
);

//get user  credit transaction
router.get(
  "/transaction/credit/:accountnumber",
  transferController.getUserCrdeit
);

//get user balance by user id
router.get("/balance/:userId", transferController.getBalanceByUserId);

//get user balance by user balances
router.get("/balance", transferController.getAllBalanceAndAccount);

export default router;
