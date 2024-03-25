const router= require('express').Router();

const Producto = require('../../models/productos.model.js')

router.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        const producto=await Producto.create(req.body);
        res.json(producto)
        
    }catch(error){
        res.json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    try{
        const producto= await Producto.find();
        res.json(producto)
    }catch(error){
        res.json({error:error.message});
    }
    });

module.exports = router;