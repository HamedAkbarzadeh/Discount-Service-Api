import { Model } from "mongoose";
import { ErrorCode } from "../exception/httpException";
import { NotFoundException } from "../exception/notFoundException";
import { AmazingDiscount, IAmazing } from "../modules/amazingDiscount/schema/amazingDiscount";
import { CommonDiscount, ICommon } from "../modules/commonDiscount/schema/commonDiscount";

enum discountTypeEnum {
    COMMON_DISCOUNT,
    AMAZING_DISCOUNT
}
class Discount {
    type: discountTypeEnum | undefined;
    commonDiscount: ICommon | null = null;
    amazingDiscount: IAmazing | null = null;
    public amazingUser: string | null;
    constructor(public code: string, public productPrice: number, amazingUser: string | null = null) {
        this.amazingUser = amazingUser;
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
    async existCommon(): Promise<boolean> {
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
        let discountAmount: number = 0, totalPriceWithDiscount: number = 0;

        if (this.type == discountTypeEnum.COMMON_DISCOUNT) {
            //if discount format with percent
            if (this.commonDiscount?.type == false) {
                discountAmount = (this.commonDiscount.price * this.productPrice) / 100;

            } else {
                //if discount format with price
                discountAmount = this.commonDiscount?.price!;
            }
        } else if (this.type == discountTypeEnum.AMAZING_DISCOUNT) {
            // check user_type (for all users OR some users)
            if (this.amazingUser) {
                if (!this.amazingDiscount?.users.includes(this.amazingUser)) {
                    return new NotFoundException("users not found for amazing discount", ErrorCode.NOTFOUND_REQUEST, 404, null);
                }
            }

            // check for price format (percent or amount)
            if (this.amazingDiscount?.price_type == false) {
                //price format is percent
                discountAmount = (this.amazingDiscount.price * this.productPrice) / 100;
            } else {
                discountAmount = this.amazingDiscount?.price as number;
            }
        }
        totalPriceWithDiscount = this.productPrice - discountAmount;

        return totalPriceWithDiscount;

        // new NotFoundException("common / amazing discount not found", ErrorCode.NOTFOUND_REQUEST, 404, null);
    }
}
