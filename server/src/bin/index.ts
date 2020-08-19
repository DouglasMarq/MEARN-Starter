
import config from "config";
import Server from "../server/index";
import container from "../bin/container";
import Mongo from "../database";

(async () => {
    container.loadContainers();
    //Inicialização HTTP
    container.getContainer().get<Server>(Server).listen(config.get("server.port"));
    //Inicialização mongo
    container.getContainer().get<Mongo>(Mongo);

})().catch(err => {
    console.error(err);
});
