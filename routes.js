const routes = require('express').Router()
const { findAll, findBy, create, update, remove } = require('./controller')

routes.get('/', findAll)
routes.post('/', create)

module.exports = routes