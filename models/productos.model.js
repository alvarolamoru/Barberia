const {model,Schema}=require('mongoose')




const productoSchema=new Schema({
    
    precio:Number,
    imagen:String,

    })




module.exports=model('producto',productoSchema);