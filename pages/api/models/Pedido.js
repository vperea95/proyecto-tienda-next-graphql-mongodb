import mongoose from 'mongoose'

const PedidoSchema = mongoose.Schema({
    pedido: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});


module.exports =
    mongoose.models.Pedido || mongoose.model('Pedido', PedidoSchema)