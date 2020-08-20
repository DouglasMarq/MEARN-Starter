import { Schema, model } from "mongoose";
import * as _ from 'lodash';

const userMod = model('users', new Schema({
  username: String,
  password: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
}));

export default class userModel {
  createUser(obj: any) { 
    return userMod.create(obj);
  }

  findUser(obj: any) { 
    return userMod.findOne(obj);
  }

  findUsers(obj: any) { 
    return userMod.find(obj);
  }

  updateUser(obj: any) { 
    return userMod.updateOne(
    {
      'username': _.get(obj, 'username')
    }, {
      '$set': {
        'password': _.get(obj, 'password')
      },
      'safe': true, 'upsert': true, 'new': true
    });
  }

  deleteUser(obj: any) { 
    return userMod.deleteOne(obj);
  }

  deleteUserById(obj: any) { 
    return userMod.findByIdAndDelete(obj);
  }
  
  deleteUsers(obj: any) { 
    return userMod.deleteMany(obj);
  }
}