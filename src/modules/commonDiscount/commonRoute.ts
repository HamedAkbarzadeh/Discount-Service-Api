import { Router } from "express";
import commonController from "./commonController";
import { validateCreateDiscount } from "./commonValidator";
import { errorHandler } from "../../exception/error-handler";

const commonRoute = Router();

commonRoute.get("/all", errorHandler(commonController.all));
commonRoute.post("/", validateCreateDiscount, errorHandler(commonController.store));
commonRoute.put("/update/:id", validateCreateDiscount, errorHandler(commonController.update));
commonRoute.delete("/delete/:id", validateCreateDiscount, errorHandler(commonController.delete));

export default commonRoute;