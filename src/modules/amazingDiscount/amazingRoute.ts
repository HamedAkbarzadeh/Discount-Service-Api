import { Router } from "express";
import amazingController from "./amazingController";
import { errorHandler } from "../../exception/error-handler";

const amazingRoute = Router();

amazingRoute.get("/all", errorHandler(amazingController.all));
amazingRoute.get("/show", errorHandler(amazingController.show));
amazingRoute.post("/", errorHandler(amazingController.store));
amazingRoute.put("/update/:id", errorHandler(amazingController.update));
amazingRoute.delete("/delete/:id", errorHandler(amazingController.delete));

export default amazingRoute;