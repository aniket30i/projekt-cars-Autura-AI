import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
//globalThis.prisma is a global variable which prevents the creation of multiple instances of PrismaClient during hot reloads during development
