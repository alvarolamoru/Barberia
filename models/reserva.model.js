const {model,Schema}=require('mongoose')

const reservaSchema=new Schema({
    id_barbero:String,
    qr:String,
    fecha:String,
    hora:String,
    estado:Boolean
})



module.exports=model('reserva',reservaSchema);
