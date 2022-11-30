import { config } from "dotenv";

config();

export default {
    port : process.env.PORT || 4000,
    sgbd : process.env.SGBD || "mongodb+srv",
    dbHost : process.env.DB_HOST,
    database : process.env.DATABASE,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    options : {
        retryWrites: true,
        w: "majority"
    }
}

