
import 'reflect-metadata';
import "../config";
import https, { Server as _Server } from "https";

import express, { Request, Response, NextFunction, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { injectable } from "inversify";

// import Router from "./router";
// import Controller from "./controller";

@injectable()
export default class Server {

    readonly _: _Server;
    readonly app: Application;

    constructor(
    ) {
        let app = this.app = express();
        app.enable('trust proxy');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({"extended": true}));
        app.use(cors());

        app.enabled('trust proxy');

        app.use((req: Request, res: Response, next: NextFunction) => {
            return res.status(404).json({"err": "not found 404"});
        });

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            return res.status(500).json({"err": "server error 500"});
        });

        this._ = https.createServer({}, app);

    }

    listen(port: number) {
        this.app.set('port', port);
        this._.listen(port);
        console.log(`HTTPS server running at port ${port}`);
    }

}