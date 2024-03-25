const{model,Schema}=require('mongoose');

const userSchema=new Schema({
    usuario:String,
    telefono:String,
    email:String,
    password:String,
    role:String
});

module.exports=model('user',userSchema);















