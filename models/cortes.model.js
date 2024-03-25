const {model,Schema}=require('mongoose')





const corteSchema=new Schema({
    nombre:String,
    imagen:String,
    descripcion:String,
    precio:Number,
    id_barbero:String,
    disponibilidad:Boolean,
    style:String
})

module.exports=model('corte',corteSchema);
