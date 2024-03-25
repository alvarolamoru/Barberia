const router= require('express').Router();

const Corte = require('../../models/cortes.model')

router.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        const corte=await Corte.create(req.body);
        res.json(corte)
        
    }catch(error){
        res.json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    try{
        const corte= await Corte.find();
        res.json(corte)
    }catch(error){
        res.json({error:error.message});
    }
    });
module.exports = router;