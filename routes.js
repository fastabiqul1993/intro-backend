const routes = require('express').Router()
const { finding, create, update, remove } = require('./controller')

routes.get('/', finding)
routes.post('/', create)
routes.put('/:id', update)
routes.delete('/:id', remove)

module.exports = routes