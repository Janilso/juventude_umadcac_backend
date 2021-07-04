import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import ROUTES_NAME from './routes_name';
// import multer from "multer";
// import uploadConfig from "./config/upload";
// import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
// const upload = multer(uploadConfig);
const userController = new UserController();

routes.get(ROUTES_NAME.USERS, userController.index);

export default routes;
