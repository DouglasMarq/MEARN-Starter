import Service from "../../service";
import { injectable } from "inversify";

@injectable()
export default class BaseController<T> extends Service<T> {
    constructor(type: new() => T) {
        super(type);
    }
    public async getEntity(obj: any) {
        return await super.getBaseEntity(obj);
    }
}