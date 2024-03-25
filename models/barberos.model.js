const {model,Schema}=require('mongoose')

const barberoSchema=new Schema({
    ciudad:String,
    contacto:String,
    cortes:String,
    direccion:String,
    direccion_maps:String,
    imagen:String,
    nombre:String,
})

module.exports=model('barbero',barberoSchema);


