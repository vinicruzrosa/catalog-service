import { PrismaClient } from "@prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient();

export const getAllLivros =async (req:Request, res:Response) => {
    try {
        const livros = await prisma.livro.findMany()
        res.status(200).json(livros)
    }catch(error){
        res.status(500).json(error);
    }
}


export const createLivro = async (req:Request, res: Response) => {
    const {titulo,autor,editora,ano_publicacao,preco} = req.body;
    try{
        const novoLivro = await prisma.livro.create({
            data:{
                titulo,
                autor,
                editora,
                ano_publicacao,
                preco,
            }
        });
        res.status(201).json(novoLivro);
    }catch (error) {
        res.status(500).json({ error});
      }
};

