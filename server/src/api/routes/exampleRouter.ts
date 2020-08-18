'use strict'
import 'reflect-metadata';
import { injectable } from "inversify";
import express,{ Router as newRouter, Application } from 'express';
import config from 'config';

@injectable()
export default class exampleRoute {
    load (app: Application) {
        let router = newRouter();
        
        router.post(`${config.get('endpoints.exampleRoute')}`, (req, res) => {
            res.json({ statusCode: 200, message: 'MEAN-Starter project is OK!' })
        });

        app.use('/exampleRouter', router);

        return router;
    }
}