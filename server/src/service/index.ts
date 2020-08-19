import { Schema, model } from "mongoose";
import Schemas from "../api/schemas";
import Joi from "joi";

export default class Service<T> {
  private readonly schema: Schemas<T> = new Schemas<T>();
  private readonly type: string;
  private res: any;

  constructor(type: new() => T) {
    // this.schema = container.getContainer().get<Schemas<T>>(Schemas);
    // this.type = type.name;
    switch(type.name) {
      case 'userModel':
        this.type = 'user';
        this.res = null;
        break;
      default:
        this.type = type.name;
        this.res = null;
        break;
    }
  }

  public async getBaseEntity(obj: any) {
    if(this.res) {
      return { "error" : this.res.error?.details[0].message };
    }
    return model(this.type, new Schema(obj))
  }
}