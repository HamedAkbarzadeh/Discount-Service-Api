import { Request, Response } from "express";
import { CommonDiscount } from "./schema/commonDiscount";
import Controller from "../controller";

class CommonController extends Controller {
    async all(_req: Request, res: Response) {
        const commons = await CommonDiscount.find();

        return this.response({
            res: res,
            message: "successfuly to show all common discount",
            data: { commons },
        })
    }
    async show(req: Request, res: Response) {
        const common = await CommonDiscount.findById(req.body.id);

        return this.response({
            res: res,
            message: "successfuly to show common discount",
            data: { common },
        })
    }
    async store(req: Request, res: Response) {

        let { name, description, type, price, code, status, expiredAt } = req.body;

        const common = await CommonDiscount.create({
            name,
            description,
            type,
            price,
            code,
            status
        });

        common.save();

        this.response({ res, message: "successfuly to added common discount", data: { common } });
    }

    async update(req: Request, res: Response) {
        const { id, name, description, type, price, code, status } = req.body;
        const common = await CommonDiscount.updateOne({
            id
        }, {
            name,
            description,
            type,
            price,
            code,
            status
        });
        this.response({
            res,
            message: "successfuly to update common discount",
            data: { common }
        });
    }
    async delete(req: Request, res: Response) {
        await CommonDiscount.deleteOne({ id: req.body.id });
        this.response({
            res,
            message: "successfuly to deleted",
        });
    }
}


export default new CommonController();