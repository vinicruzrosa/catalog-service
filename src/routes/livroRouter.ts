import {Router} from "express";
import {createLivro,deleteById,getAllLivros, getLivroById, updateLivro} from "../controllers/livroController";

const routes = Router();

routes.post("/livros", createLivro)
routes.get('/livros', getAllLivros)
routes.get('/livros/:id', getLivroById)
routes.put('/livros/:id', updateLivro)
routes.delete('/livros/:id', deleteById)

export default routes;