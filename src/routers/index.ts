import { Router } from 'express';
import { BibleController } from '../controllers/bible_controller';
import { UserController } from '../controllers/user_controller';
import ROUTES_NAME from './routes_name';
// import multer from "multer";
// import uploadConfig from "./config/upload";
// import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
// const upload = multer(uploadConfig);
const userController = new UserController();
const bibleController = new BibleController();

routes.get(ROUTES_NAME.USERS, userController.index);
routes.get(ROUTES_NAME.BIBLE, bibleController.index);

export default routes;
