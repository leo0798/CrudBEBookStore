const {buku} = require('../models');

class BukuController{
    static async getBuku(req, res){
        try{
            let book = await buku.findAll();
            res.json(book)

        }
        catch(err){
            res.json(err)
        }
           

        

    }
    static readBuku(req, res){
        
    }
    static createBuku(req, res){
        
    }
    static addBuku(req, res){
        
    }
    static updatepage(req, res){
        
    }
    static updateBuku(req, res){
        
    }
    static deleteBuku(req, res){
        
    }

}

module.exports = BukuController;