import { Router } from "express";
import commonController from "./commonController";
import { validateCreateDiscount } from "./commonValidator";
import { errorHandler } from "../../exception/error-handler";

const commonRoute = Router();

commonRoute.post("/create", validateCreateDiscount, commonController.createCommonDiscount);
commonRoute.get("/all", errorHandler(commonController.all));

export default commonRoute;