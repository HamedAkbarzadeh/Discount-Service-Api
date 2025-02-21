import { Model } from "mongoose";
import { ErrorCode } from "../exception/httpException";
import { NotFoundException } from "../exception/notFoundException";
import { AmazingDiscount } from "../modules/amazingDiscount/schema/amazingDiscount";
import { CommonDiscount, ICommon } from "../modules/commonDiscount/schema/commonDiscount";

enum discountTypeEnum {
    COMMON_DISCOUNT,
    AMAZING_DISCOUNT
}
class Discount {
    type: discountTypeEnum | undefined;
    commonDiscount: ICommon | null = null;

    constructor(public code: string, public productPrice: number) {
        this.setType();
    }
    async setType() {
        if (await this.existAmazing()) {
            this.type = discountTypeEnum.AMAZING_DISCOUNT
        } else if (await this.existCommon()) {
            this.type = discountTypeEnum.COMMON_DISCOUNT
        } else {
            this.type = undefined
        }
    }
    async existCommon() {
        const common: ICommon | null = await CommonDiscount.findOne({ code: this.code });
        if (common) {
            this.commonDiscount = common;
            return true;
        }
        return false;
    }
    async existAmazing(): Promise<boolean> {
        const amazing = await AmazingDiscount.findOne({ code: this.code });
        if (amazing) {
            return true;
        }
        return false;
    }
    async calculateDiscount(code: string) {
        if (this.type == discountTypeEnum.COMMON_DISCOUNT) {
            let discountAmount: number;
            if (this.commonDiscount?.type == false) {
                //if discount format with percent
                discountAmount = (this.commonDiscount.price * this.productPrice) / 100;

            } else {
                //if discount format with price
                discountAmount = this.commonDiscount?.price!;
            }
            const totalPriceWithDiscount = this.productPrice - discountAmount;
            return totalPriceWithDiscount;
        } else if (this.type == discountTypeEnum.AMAZING_DISCOUNT) {

        }


        // new NotFoundException("common / amazing discount not found", ErrorCode.NOTFOUND_REQUEST, 404, null);
    }
}
