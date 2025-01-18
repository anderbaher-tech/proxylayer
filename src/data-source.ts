import "reflect-metadata";
import { DataSource } from "typeorm";
import {Logs}  from "./entity/Logs.entity"; 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "",
    port: parseInt("5432"),
    username: "",
    password: "",
    database: "",
    synchronize: true,
    logging: true,
    entities: [Logs],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
  });
  