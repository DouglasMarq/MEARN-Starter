import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server';
import Router from '../api'

let container = new Container();

export class bindContainers {
    loadContainers() {
        container.bind<Server>(Server).to(Server).inSingletonScope();
        container.bind<Router>(Router).to(Router).inSingletonScope();
    }

    getContainer() {
        return container;
    }
}

export default new bindContainers();