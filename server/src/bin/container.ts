import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server';
import Router from '../api'
import exampleRoute from '../api/routes/exampleRouter'

const container = new Container();
container.bind<Server>(Server).to(Server).inSingletonScope();
container.bind<Router>(Router).to(Router).inSingletonScope();
// container.bind<IntegrableRestRouter>(IntegrableRestRouter).to(IntegrableRestRouter).inSingletonScope();
container.bind<exampleRoute>(exampleRoute).to(exampleRoute).inSingletonScope();
export default container;