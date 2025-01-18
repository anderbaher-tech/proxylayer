import "dotenv/config"; 
import * as dotenv from 'dotenv';
import "module-alias/register";
import validateEnv from "@/utils/ValidateEnv";
import App from "./app";
import HealthController from "@/resources/healthCheck/heath.controller";
import ProxyRoutes from "./resources/Assignment/routes/proxy.routes";
import "reflect-metadata";
validateEnv(); 
dotenv.config();
console.log('Database URL:', process.env.DATABASE_URL ? process.env.DATABASE_URL : 'Not Loaded');

const app = new App(
  [new HealthController(), new ProxyRoutes()],
  Number(process.env.PORT)
);

app.listen();
