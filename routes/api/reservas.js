const router= require('express').Router();

const Reserva=require('../../models/reserva.model')


router.post('/',async(req,res)=>{
    try{
        const reserva=await Reserva.create(req.body);
        res.json(reserva)
        
    }catch(error){
        res.json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    try{
        const reserva= await Reserva.find();
        res.json(reserva)
    }catch(error){
        res.json({error:error.message});
    }
    });

    module.exports = router;
