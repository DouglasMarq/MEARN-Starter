import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server';
import Router from '../api'
import exampleRoute from '../api/routes/exampleRouter'

let container = new Container();

export class bindContainers {
    constructor() {
    }

    loadContainers() {
        container.bind<Server>(Server).to(Server).inSingletonScope();
        container.bind<Router>(Router).to(Router).inSingletonScope();
        container.bind<exampleRoute>(exampleRoute).to(exampleRoute).inSingletonScope();
    }

    getContainer() {
        return container;
    }
}

export default new bindContainers();