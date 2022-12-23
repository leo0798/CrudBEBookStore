const bukuRoute = require('express').Router()
const {BukuController} = require('../Controller')


bukuRoute.get('/', BukuController.getBuku)
bukuRoute.get('/read', BukuController.readBuku)
bukuRoute.post('/add', BukuController.addBuku)
bukuRoute.get('/create', BukuController.createBuku)
bukuRoute.get('/update/:id',BukuController.updatepage)
bukuRoute.post('/update/:id',BukuController.updateBuku)
bukuRoute.get('/delete/:id',BukuController.deleteBuku)





module.exports = bukuRoute