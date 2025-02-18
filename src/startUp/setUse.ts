import { Express } from "express"
import helmet from "helmet";

export const setUse = (app: Express, express: any) => {
    app.use(express.json());
    app.use(helmet());
}
