
import config from "config";
import Server from "../server/index";
import container from "../bin/container";

(async () => {    
    let test = container.get<Server>(Server);
    test.listen(config.get("server.port"));

})().catch(err => {
    console.error(err);
});
