import dotenv from "dotenv"

dotenv.config({ path: ".env" })

export const DB_ADDRESS = process.env.DB_ADDRESS;
export const DEBUG = process.env.DEBUG;
export const PORT = process.env.PORT;