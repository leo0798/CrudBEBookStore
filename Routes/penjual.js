const penjualRoute = require('express').Router()
const {PenjualController} = require('../controller')

penjualRoute.get('/', PenjualController.getPenjual)
penjualRoute.get('/read', PenjualController.readPenjual)
penjualRoute.post('/add', PenjualController.addPenjual)
penjualRoute.post('/create', PenjualController.createPenjual)
penjualRoute.get('/update/:id',PenjualController.updatepage)
penjualRoute.post('/update/:id',PenjualController.updatePenjual)
penjualRoute.get('/delete/:id',PenjualController.deletePenjual)


module.exports = penjualRoute