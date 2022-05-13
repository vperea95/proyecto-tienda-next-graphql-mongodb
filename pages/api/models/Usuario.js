import mongoose from 'mongoose'

const UsuarioSchema = mongoose.Schema({
    dni: {
        type:String,
        require: true
    },
    primerNombre: {
        type:String,
        require: true
    },
    segundoNombre: {
        type:String,
    },
    primerApellido: {
        type:String,
        require: true
    },
    segundoApellido: {
        type:String,
    },
    cel: {
        type:String,
    },
    email: {
        type:String,
        require: true,
        unique: true
    },
    password: {
        type:String,
        require: true
    },
    fechaRegistro: {
        type:Date,
        default: Date.now()
    },

});


module.exports =
    mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema)