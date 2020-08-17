import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server/index';

const container = new Container();
container.bind<Server>(Server).to(Server).inSingletonScope();
export default container;