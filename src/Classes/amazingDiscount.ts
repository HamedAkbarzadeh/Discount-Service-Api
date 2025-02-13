import { time } from "console";
import Discount from "./Discount";


class AmazingDiscount extends Discount {


    private _discountCount;
    constructor() {
        super();
    }
    private async amazingDiscountCounter() {
        this._discountCount = await this.redis.incr("amazingCount");
        return this._discountCount;
    }
    async addAmazingDiscount(
        productID: string[],
        title: string,
        description: string,
        amountDiscount: number,
        amountType: number = 0,
        expiredAfterSecond: number) {
        let amazingDiscountName = `amazingSale:${this.amazingDiscountCounter}`;
        this.redis.hset(amazingDiscountName, { productID, title, description, amountDiscount, amountType, expiredAfterSecond, created_at: time() });
        this.redis.expire(amazingDiscountName, expiredAfterSecond);
    }
}