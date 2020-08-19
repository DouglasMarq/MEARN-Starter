import { Application, Router as newRouter } from 'express';
import { injectable } from 'inversify';
import Controller from './controller';
import UserController from './controller/user/userController';

@injectable()
export default class Router {
  private readonly controller: Controller;
  
  constructor() {
    this.controller = new Controller();
  }
  loadRouters(app: Application) {
    let router = newRouter();
    
    router.get(`/findRoute`, this.controller.find);
    // router.post(`/createRoute`, this.controller.create);
    // router.delete(`/deleteRoute`, this.controller.delete);
    // router.patch(`/updateRoute`, this.controller.update);

    app.use('/api', router);
    return router;
  }
}