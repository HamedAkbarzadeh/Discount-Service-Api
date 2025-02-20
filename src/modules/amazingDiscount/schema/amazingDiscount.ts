import mongoose, { Schema } from "mongoose";
import MongooseDelete from "mongoose-delete";
const amazingDiscountSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: Text },
    price_type: { type: Boolean, comment: "0 => percent format , 1 => price format" },
    price: { type: Number, require: true },
    users_type: { type: Boolean, default: false, comment: "0 => for ull users , 1 => for some users" },
    users: [{ type: String }],
    products: [{ type: String }],
    code: { type: String, required: true, unique: true },
    status: { type: Boolean, default: false },
    expiredAt: { type: Date, required: true }

},
    {
        // set created_at and updated_at fileds
        timestamps: true,
    }
);
// set deletedAt field
mongoose.plugin(MongooseDelete, { deletedAt: true, overrideMethods: true });


export const AmazingDiscount = mongoose.model("AmazingDiscount", amazingDiscountSchema);
