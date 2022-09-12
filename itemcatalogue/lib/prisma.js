import { PrismaClient } from '@prisma/client';

let prisma;

prisma = new PrismaClient();

export default prisma;