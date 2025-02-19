import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createCommonSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    type: z.boolean().optional(),
    price: z.number(),
    code: z.string(),
    status: z.boolean().optional()
});


export const validateCreateDiscount = (req: Request, _res: Response, next: NextFunction) => {
    createCommonSchema.parse(req.body);
    next();
}