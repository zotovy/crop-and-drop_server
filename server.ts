import express, { Express } from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./modules/index";
import https from "https";
import fs from "fs";
import configHelper from "./helpers/config_helper";
import path from "path";

class Server {
    app: Express;
    port: number;
    url: string;
    server: https.Server;

    constructor() {
        this.app = express();
        this.port =configHelper.port;
        this.url = configHelper.url;
        this.server = https.createServer({});
    }

    setupExpress = () => {
        this.app.use(cors());
        this.app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        this.app.use(bodyParser.json());
        this.app.use(fileUpload());
        this.app.use("/", Router);
    }

    setupServer = async (): Promise<void> => {

        const httpsOptions = {
            key: fs.readFileSync(path.join(__dirname, configHelper.ssl_key_path)).toString(),
            cert: fs.readFileSync(path.join(__dirname, configHelper.ssl_cert_path)).toString(),
        };

        this.server = https
            .createServer(httpsOptions, this.app)
            .listen(this.port, this.url, () => {
                console.log(
                    `server listening on https://${this.url}:${this.port}`
                );
            });
    };
}

export default new Server();