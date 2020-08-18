'use strict'
import joi from 'joi';

export default class findSchema {
    validateSchema() {
        return joi.object({
            username: joi.string().required(),
            email: joi.string(),
        });
    }
}

// module.exports = ({ joi }) => {
//   const loginSchema = joi.object({
//     userName: joi.string().alphanum().min(6).max(30).required(),
//     password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
//   })
//   return loginSchema
// }
