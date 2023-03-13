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

export const getLivroById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const livro = await prisma.livro.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!livro) {
        res.status(404).json({ error: `Livro com o id ${id} não encontrado.` });
      } else {
        res.status(200).json(livro);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };


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

export const updateLivro = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const { titulo, autor, editora, ano_publicacao, preco } = req.body;
    try{
        const livroAtualizado = await prisma.livro.update({
            where :{
                id:Number(id),
            },
            data: {
                titulo,
                autor,
                editora,
                ano_publicacao,
                preco,
              },
        })
        res.json(200).json(livroAtualizado)
    }catch(error){
        res.status(500).json(error)
    }
};

export const deleteById =async (req:Request, res:Response) => {
    const {id} = req.params;
    try{
        const livroDeletado = await prisma.livro.delete({
            where:{
                id:Number(id)
            }
        });
        res.status(200).json(livroDeletado)

    }catch(error){
        res.status(500).json(error)
    }
    
}