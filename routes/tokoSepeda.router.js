const routes = require('express').Router()
const { finding, create, update, remove } = require('../controller/tokoSepeda.controller')

routes.get('/', finding)
routes.post('/', create)
routes.patch('/:id', update)
routes.delete('/:id', remove)

module.exports = routes