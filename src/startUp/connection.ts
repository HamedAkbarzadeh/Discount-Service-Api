import mongoose from "mongoose";
import { DB_ADDRESS } from "../secret";
import debug from "debug";


export const connectToDB = () => {
    mongoose.connect(String(DB_ADDRESS)).
    then(() => { debug("connected to db") }).
    catch(() => { debug("cant connect to db") });
}