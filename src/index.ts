import express from "express";
import { PORT } from "./secret";
import { debug } from "console";
import { connectToDB } from "./startUp/connection";
import { setUse } from "./startUp/setUse";
import apiRoute from "./modules/apiRoute";

const app = express();

setUse(app, express);
connectToDB();


// /api prefix route
app.use(apiRoute);

app.listen(PORT, () => { debug("listen on port : " + PORT) });