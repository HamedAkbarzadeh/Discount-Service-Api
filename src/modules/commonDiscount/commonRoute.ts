import { Router } from "express";
import commonController from "./commonController";
import { validateCreateDiscount } from "./commonValidator";

const commonRoute = Router();

commonRoute.post("/create", validateCreateDiscount, commonController.createCommonDiscount);

export default commonRoute;