'use strict'

import { injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export default class Controller {
    constructor() {
    }
    find(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
    create(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: req.body });
    }
    delete(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
    update(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
}