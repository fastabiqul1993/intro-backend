const routes = require('express').Router()
const { findAll, findBy, create, update, remove } = require('./controller')

routes.get('/', findAll)

module.exports = routes