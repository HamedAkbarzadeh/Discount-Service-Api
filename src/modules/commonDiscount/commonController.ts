import { Request, response, Response } from "express";
import { CommonDiscount } from "./schema/commonDiscount";
import { Controller } from "../controller";
class CommonController extends Controller {

    createCommonDiscount(req: Request, res: Response) {
        let { name, description, type, price, code, status, expiredAt } = req.body;
        const common = new CommonDiscount({
            name,
            description,
            type,
            price,
            code,
            status,
            expiredAt
        });

        this.response({ res, message: "successfuly to added common discount", data: { common } });
    }

}

export default new CommonController();