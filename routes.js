const routes = require('express').Router()
const { findAll, findBy, create, update, remove } = require('./controller')

routes.get('/', findAll)
routes.post('/', create)
routes.put('/:id', update)

module.exports = routes