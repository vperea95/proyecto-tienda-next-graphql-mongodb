import mongoose from 'mongoose'

const ProductoSchema = mongoose.Schema({
    codigo: {
        type:String,
        require: true,
        unique:true
    },
    Nombre: {
        type:String,
        require: true
    },
    descripcion: {
        type:String,
        require: true
    },
    precio: {
        type:Number,
        require: true
    },
    cantidad: {
        type:Number,
        require: true
    }
});


module.exports =
    mongoose.models.Producto || mongoose.model('Producto', ProductoSchema)