import { Router } from "express";
import commonRoute from "./commonDiscount/commonRoute";

const apiRoute = Router();

apiRoute.use("/common-discount", commonRoute)

export default apiRoute;