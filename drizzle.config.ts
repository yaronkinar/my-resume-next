import {Config} from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { hostname } from 'os';
dotenv.config(
    {
        path: '.env'
    }

);
export default{
    schema:"./database/schema.ts",
    driver:"mysql2",
    dbCredentials:{
        host:process.env.DATABASE_HOST!,
        user:process.env.DATABASE_USERNAME!,
        password:process.env.DATABASE_PASSWORD!,
        database:"myresume"
    },
    out:"./drizzle",
} satisfies Config;