import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "Logs" }) // Table name is "Logs" 

  export class Logs {
    @PrimaryGeneratedColumn("uuid")
    id!: string; // Auto-generated UUID
  
    @CreateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    timeStamp!: Date; // Auto-generated timestamp when a row is created

    @Column({ type: "jsonb", nullable: false })
    message!: object; // JSON column in PostgreSQL
  } 


  export const obj = {

  }
  