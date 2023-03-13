import { PrismaClient } from "@prisma/client";
import express from "express";
import LivroRouter from "./routes/livroRouter"

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(LivroRouter)

app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
