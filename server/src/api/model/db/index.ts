import { injectable } from "inversify";
import userModel from "./userSchema";

@injectable()
export default class databaseIndex {
    private readonly userModel: userModel = new userModel();
    private readonly _type: string;
    constructor(type: string) {
        this._type = type;
    }

    public async create(obj: any) {
        switch(this._type) {
            case 'userModel':
                return await this.userModel.createUser(obj);
            default: 
                break;
        }
    } 

    public async find(obj: any) {
        switch(this._type) {
            case 'userModel':
                let format = {
                    'username': obj['username']
                }
                return await this.userModel.findUser(format);
            default: 
                break;
        }
    }

    public async list(obj: any) {
        switch(this._type) {
            case 'userModel':
                return await this.userModel.findUsers(obj);
            default: 
                break;
        }
    }
    public async update(obj: any) {
        switch(this._type) {
            case 'userModel':
                return await this.userModel.updateUser(obj);
            default: 
                break;
        }
    }

    public async delete(obj: any) {
        switch(this._type) {
            case 'userModel':
                return await this.userModel.deleteUser(obj);
            default: 
                break;
        }
    }

    public async deleteMany(obj: any) {
        switch(this._type) {
            case 'userModel':
                return await this.userModel.deleteUsers(obj);
            default: 
                break;
        }
    }
}