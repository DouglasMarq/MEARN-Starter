'use strict'

import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import Mongo from "../../database";
import Schema from "../../api/schemas";
import UserSchema from "../model/db/userSchema";

let schemaValidator: Schema;
let createUser: any;

@injectable()
export default class Controller {
    constructor(
        @inject(Schema) schema: Schema,
        @inject(Mongo) mongo: Mongo
    ) {
        schemaValidator = schema;
        createUser = new UserSchema().getSchema();
    }
    find(req: Request, res: Response) {  
        let result = schemaValidator.validateFindSchema(req.body.subject, req.body.description);
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
    async create(req: Request, res: Response) {
        let result = schemaValidator.validateCreateSchema({'username': req.body.username, 'password': req.body.password});
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        let verify = await createUser.findOne({'username': req.body.username});
        console.log(verify);
        if (!verify) {
            createUser.create({'username': req.body.username, 'password': req.body.password});
        } else {
            return res.status(401).json({statusCode: 401, message: 'Usuário já existente.'});
        }
        return res.status(200).json({ statusCode: 200, message: 'Criado com sucesso!' });
    }
    delete(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
    update(req: Request, res: Response) {
        return res.status(200).json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    }
}