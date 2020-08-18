'use strict'
import { Application, Router as newRouter } from 'express';
import { injectable } from 'inversify';
import Controller from './controller';
import container from '../bin/container';

@injectable()
export default class Router {    
  loadRouters(app: Application) {
    let router = newRouter();
    let controller = container.getContainer().get<Controller>(Controller);
    
    router.get(`/findRoute`, controller.find);
    router.post(`/createRoute`, controller.create);
    router.delete(`/deleteRoute`, controller.delete);
    router.patch(`/updateRoute`, controller.update);

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