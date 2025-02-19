import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";
const commonDiscountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: Boolean, default: true, comment: "0 => percent format , 1 => price format" },
    price: { type: Number, require: true },
    code: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true },
    expiredAt: { type: Date }

},
    {
        // set created_at and updated_at fileds
        timestamps: true,
    }
);
// set deletedAt field
mongoose.plugin(MongooseDelete, { deletedAt: true, overrideMethods: true });


export const CommonDiscount = mongoose.model("CommonDiscount", commonDiscountSchema);
