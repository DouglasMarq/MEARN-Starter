
import config from "../config/index";
import Server from "../server/index";
import container from "../bin/container"

(async () => {
    
    let test = container.get<Server>(Server);
    test.listen(3000);

})().catch(err => {
    console.error(err);
});
