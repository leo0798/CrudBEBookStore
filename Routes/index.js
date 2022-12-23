const route = require('express').Router();



route.get('/', (req, res) => {
    res.send('Hello World!, welcome to My Bookstore!');
  })


const penjualRoute = require("./penjual")
const pembeliRoute = require("./pembeli")
const bukuRoute = require("./buku")

route.use('/penjual',penjualRoute)
route.use('/pembeli',pembeliRoute)
route.use('/buku',bukuRoute)

module.exports = route