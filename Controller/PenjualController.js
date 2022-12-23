const {penjual,buku} = require('../models');

class PenjualController{
    static async getPenjual(req, res){
        try{
            let penjuals = await penjual.findAll();
            res.json(penjuals)
        }
        catch(err){
            res.json(err)
        }

    }
    static readPenjual(req, res){
        
    }
    static async createPenjual(req, res)  {
        try{
            const { nama,email,no_telepon,alamat} = req.body;
            let resultPenjual = await penjual.create({nama,email,no_telepon,alamat})
            

             res.json(resultPenjual)
        }
        catch(err){
            res.json(err)
        }
        
    }
    static addPenjual(req, res){
        
    }
    static updatepage(req, res){
        
    }
    static updatePenjual(req, res){
        
    }
    static deletePenjual(req, res){
        
    }

}

module.exports = PenjualController;