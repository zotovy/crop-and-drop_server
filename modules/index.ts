import {Router as Express} from "express";
import UploadRouter from "./upload/routes";

const Router = Express();
Router.use("/upload", UploadRouter);

export default Router;

