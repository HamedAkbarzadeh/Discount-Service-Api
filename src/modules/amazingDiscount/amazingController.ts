import { Request, Response } from "express";
import { AmazingDiscount } from "./schema/amazingDiscount";
import Controller from "../controller";

class AmazingController extends Controller {
    async all(_req: Request, res: Response) {
        const amazings = await AmazingDiscount.find();

        return this.response({
            res: res,
            message: "successfuly to show all amazing discount",
            data: { amazings },
        })
    }
    async show(req: Request, res: Response) {
        const amazing = await AmazingDiscount.findById(req.body.id);

        return this.response({
            res: res,
            message: "successfuly to show amazing discount",
            data: { amazing },
        })
    }
    async store(req: Request, res: Response) {

        let { name, description, price_type, users_type, price, code, status, expiredAt } = req.body;

        const amazing = await AmazingDiscount.create({
            name,
            description,
            price_type,
            users_type,
            price,
            code,
            status,
            expiredAt,
            products: req.body.products,
            users: req.body.users
        });

        amazing.save();

        this.response({ res, message: "successfuly to added amazing discount", data: { amazing } });
    }

    async update(req: Request, res: Response) {
        const { id, name, description, price_type, users_type, price, code, status, expiredAt } = req.body;
        const amazing = await AmazingDiscount.updateOne({
            id
        }, {
            name,
            description,
            price_type,
            users_type,
            price,
            code,
            status,
            expiredAt,
            products: req.body.products,
            users: req.body.users
        });
        this.response({
            res,
            message: "successfuly to update amazing discount",
            data: { amazing }
        });
    }
    async delete(req: Request, res: Response) {
        await AmazingDiscount.deleteOne({ id: req.body.id });
        this.response({
            res,
            message: "successfuly to deleted",
        });
    }
}


export default new AmazingController();