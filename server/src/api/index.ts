'use strict'
import { Application, Router as newRouter } from 'express';
import { injectable } from 'inversify';

@injectable()
export default class Router {    
  loadRouters(app: Application) {
    let router = newRouter();
    
    router.get(`/exampleRoute`, (req, res) => { 
      res.json({ statusCode: 200, message: 'MEAN-Starter project is OK!' });
    });

    app.use('/api', router);
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