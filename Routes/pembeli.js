const pembeliRoute = require('express').Router()
const {PembeliController} = require('../controller')


pembeliRoute.get('/', PembeliController.getData)
pembeliRoute.get('/read', PembeliController.readData)
pembeliRoute.post('/add', PembeliController.addData)
pembeliRoute.get('/create', PembeliController.createData)
pembeliRoute.get('/update/:id',PembeliController.updatepage)
pembeliRoute.post('/update/:id',PembeliController.updateData)
pembeliRoute.get('/delete/:id',PembeliController.deleteData)


module.exports = pembeliRoute