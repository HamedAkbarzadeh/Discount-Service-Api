import { Model } from "mongoose";
import { ErrorCode } from "../exception/httpException";
import { NotFoundException } from "../exception/notFoundException";
import { AmazingDiscount } from "../modules/amazingDiscount/schema/amazingDiscount";
import { CommonDiscount } from "../modules/commonDiscount/schema/commonDiscount";

interface ICommon {
    name: string;
    description: string;
    type: boolean;
    price: number;
    code: string;
    status: boolean;
    expiredAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
class CalculateDiscount {
    constructor(public code: string) {

    }

    async existCommon(): Promise<boolean> {
        const common = await CommonDiscount.findOne({ code: this.code });
        if (common) {
            return true;
        }
        return false;
    }

    async calculateDiscount(code: string) {
        //check for exists in common discount
        const common = await CommonDiscount.findOne({ code });
        if (common) {
            //calculate common discount

        }
        else {
            //check for exists in amazing discount
            const amazing = await AmazingDiscount.findOne({ code });
            if (amazing) {
                //calculate common discount

            }
        }

        new NotFoundException("common / amazing discount not found", ErrorCode.NOTFOUND_REQUEST, 404, null);
    }
}
