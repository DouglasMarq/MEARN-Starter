'use strict'
import express, { Application, Router as newRouter } from 'express';
import bodyParser from 'body-parser';
import { injectable } from 'inversify';

@injectable()
export default class Router {  
  loadRouters(app: Application) {
    app.get(`/api`, (req, res) => { 
      res.json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    });
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