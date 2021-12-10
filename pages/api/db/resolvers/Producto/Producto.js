import Producto from '../../../models/Producto'

export const obtenerProductos = async () => {
            try {
                const productos = await Producto.find({});
                return productos;
            } catch (error) {
                console.log(error);
            }
}

export const obtenerProducto = async (_, { codigo }) => {
    // revisar si el producto existe o no
    const producto = await Producto.findOne({ codigo: codigo });

    if(!producto) {
        throw new Error('Producto no encontrado');
    }
    return producto;
}

    
export const nuevoProducto = async (_, {input}) => {
    try {
        const producto = new Producto(input);

        // almacenar en la bd
        const resultado = await producto.save();

        return resultado;
    } catch (error) {
        console.log(error);
    }
}
export const actualizarProducto = async (_, {id, input}) => {
    // revisar si el producto existe o no
    let producto = await Producto.findById(id);

    if(!producto) {
        throw new Error('Producto no encontrado');
    }

    // guardarlo en la base de datos
    producto = await Producto.findOneAndUpdate({ _id : id }, input, { new: true } );

    return producto;
}
export const eliminarProducto = async(_, {id}) => {
    // revisar si el producto existe o no
    let producto = await Producto.findById(id);

    if(!producto) {
        throw new Error('Producto no encontrado');
    }

    // Eliminar
    await Producto.findOneAndDelete({_id :  id});

    return "Producto Eliminado";
}

export default {
    TYPES: {
    },
    QUERIES: {
        obtenerProductos,
        obtenerProducto
    },
    MUTATIONS: {
      nuevoProducto,
      actualizarProducto,
      eliminarProducto
    }
}