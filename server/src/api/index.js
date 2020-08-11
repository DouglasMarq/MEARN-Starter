'use strict'

module.exports = ({
  express,
  config,
  bodyParser,
  joi,
//   controller,
//   errorUtil,
//   jwt
}) => {
//   const { validateSchema, verifyToken } = require('./middlewares')({
//     config,
//     jwt,
//     errorUtil
//   })
  const app = express()
//   const schemas = require('./schemas')({ joi })
  const routes = require('./routes')({
    express,
    config,
    joi,
    // schemas,
    // validateSchema,
    // controller,
    // errorUtil
  })
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
//   app.use(verifyToken)
  app.use(routes)

  return app
}