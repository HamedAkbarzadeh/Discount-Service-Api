import { Request, Response } from "express";
import { CommonDiscount } from "./schema/commonDiscount";
import Controller from "../controller";

class CommonController extends Controller {

    async createCommonDiscount(req: Request, res: Response) {

        let { name, description, type, price, code, status, expiredAt } = req.body;

        const common = await CommonDiscount.create({
            name: "noroz",
            description: "test",
            // type,
            price: 143000,
            code: "hmd-test",
            status: true
        });

        common.save();

        this.results({ res, message: "successfuly to added common discount", data: { common } });
    }
    async all(_req: Request, res: Response) {
        const commons = await CommonDiscount.find();

        return this.results({
            res: res,
            message: "successfuly to show all common discount",
            data: { commons },
        })
    }
}

export default new CommonController();