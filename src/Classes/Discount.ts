import Redis from "ioredis";

export default class discount {
    protected _amountDiscount: number;
    protected _amountType: number; // 0 => percent , 1 => price
    protected _expiredAfterSecond: number;
    protected _code: string;
    protected redis: Redis;

    constructor() {
        this.redis = new Redis;
    }

    get amountType(): string {
        return this._amountType == 1 ? "price format" : "percent format";
    }
    get amountDiscount(): number {
        return this._amountDiscount;
    }
}