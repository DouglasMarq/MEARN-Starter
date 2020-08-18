'use strict'
import express, { Application, Router as newRouter } from 'express';
import bodyParser from 'body-parser';
import { injectable } from 'inversify';

@injectable()
export default abstract class Router {
  abstract load(app: Application): any;
}

@injectable()
export abstract class IntegrableRestRouter extends Router {
  constructor (
  ) {
    super();
  }
  load(app: Application) {
    let router = newRouter();

    router.post(`/`, (req, res) => { 
      res.json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    });


    return router;
  }
}
  // express,
  // config,
  // bodyParser,
  // joi,
//   controller,
//   errorUtil,
//   jwt
// }) => {
// //   const { validateSchema, verifyToken } = require('./middlewares')({
// //     config,
// //     jwt,
// //     errorUtil
// //   })
//    const app = express()
// // //   const schemas = require('./schemas')({ joi })
//   const routes = require('./routes')({
// //     express,
// //     config,
// //     joi,
// //     // schemas,
// //     // validateSchema,
// //     // controller,
// //     // errorUtil
//   })
//   app.use(bodyParser.urlencoded({ extended: true }))
//   app.use(bodyParser.json())
// // //   app.use(verifyToken)
//   app.use(routes)

//   return app
// }