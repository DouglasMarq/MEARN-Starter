'use strict'

module.exports = ({ router, config }) => {
  const { endpoints } = config

  router.get(`${endpoints.exampleRoute.uri}`, (req, res) => {
    res.json({ statusCode: 200, message: 'MEAN-Starter project is OK!' })
  })
  return router
}