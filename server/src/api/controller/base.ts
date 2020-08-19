'use strict'

import Service from "../../service";
import container from "../../bin/container";
import { injectable } from "inversify";

@injectable()
export default class BaseController<T> extends Service<T> {
    constructor(type: new() => T) {
        super(type);
    }
    public async getEntity(id: string) {
        return await this.getBaseEntity(id);
    }
}