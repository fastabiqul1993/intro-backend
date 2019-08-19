const routes = require('express').Router()
const { finding, inserData, update, remove } = require('../controller/tokoSepeda.controller')

routes.get('/', finding)
routes.post('/', inserData)
routes.patch('/:id', update)
routes.delete('/:id', remove)

module.exports = routes