const router =require('express').Router();
const bcrypt=require('bcryptjs');
const User=require('../../models/users.model');
const jwt=require('jsonwebtoken')
// POST/api/users/register
router.post('/register',async (req,res)=>{
   try{   
    req.body.password=bcrypt.hashSync(req.body.password,13);
   
    const user=await User.create(req.body);
    res.json(user);
    
    }catch(error){
        res.json({error:error.message});
    }

})
//POST/api/users/login
router.post("/login",async(req,res)=>{
    const user =await User.findOne({email:req.body.email});

    if(!user){
        return res.json({error:'Error en email/contraseña'});
    }

    const eq=bcrypt.compareSync(req.body.password,user.password)
    if(!eq){
        return res.json({error:'Error en email/contraseña'});
    }
    res.json({success:'Login correcto',token:createToken(user)});
})

function createToken(user){
    const payload={
        user_id:user._id,
        user_role:user.role
    }
    return jwt.sign(payload,'el mini')
}
module.exports=router;