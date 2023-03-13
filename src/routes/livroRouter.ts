import {Router} from "express";
import {createLivro,getAllLivros} from "../controllers/livroController";

const routes = Router();

routes.post("/livros", createLivro)
routes.get('/livros', getAllLivros)

export default routes;