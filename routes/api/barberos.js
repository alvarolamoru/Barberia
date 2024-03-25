const router= require('express').Router();

const Barbero = require('../../models/barberos.model')

router.get('/',async(req,res)=>{
try{
    const barberos= await Barbero.find();
    res.json(barberos)
}catch(error){
    res.json({error:error.message});
}
});

router.get('/:barberoId',(req,res)=>{

})

router.post('/',async(req,res)=>{
    try{
        const barbero=await Barbero.create(req.body);
        res.json(barbero)
        
    }catch(error){
        res.json({error:error.message})
    }
})

// router.put('/:barberoId',async(req,res)=>{
//     const {barberoId}=req.params;

//     try{
//         const barbero= await Barbero.findByIdAndUpdate(barberoId,req.body,{new:true});
//         res.json(barbero);
//     }catch(error){
//         res.json({error:error.mesage})
//     }
// })

router.delete('/:barberoId',async(req,res)=>{
    const { barberoId }=req.params;

    try{
        const barbero = await Barbero.findByIdAndDelete(barberoId);
        req.json(barbero);
    }catch(error){
        res.json({error:error.messaje})
    }
})


module.exports = router;
