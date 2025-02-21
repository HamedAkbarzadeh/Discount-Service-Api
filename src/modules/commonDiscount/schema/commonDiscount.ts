import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";


export interface ICommon extends Document {
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

export const commonDiscountSchema = new mongoose.Schema<ICommon>({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: Boolean, default: true, comment: "false => percent format , true => price format" },
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


export const CommonDiscount = mongoose.model<ICommon>("CommonDiscount", commonDiscountSchema);
