import bcrypt from 'bcryptjs'
import Usuario from '../../../models/Usuario'

export const obtenerUsuarios = async () => {
            try {
                const usuarios = await Usuario.find({});
                return usuarios;
            } catch (error) {
                console.log(error);
            }
}

export const obtenerUsuario = async (_, { dni }) => {
    // revisar si el Usuario existe o no
    const usuario = await Usuario.findOne({ token: dni });

    if(!usuario) {
        throw new Error('Usuario no encontrado');
    }
    return usuario;
}

    
export const nuevoUsuario = async (_, {input}) => {
    const{email, dni, password} = input;
    //Validacion si el usuario ya esta registrado
    const exiteUsuario = await Usuario.findOne({email,dni})
    if (exiteUsuario){
        throw new Error('El Usuario ya Existe');
    }
    //Hashear password
    const sal  = await bcrypt.genSaltSync(10) ;
    input.password = await bcrypt.hash(password,sal)

    try {
        const usuario = new Usuario(input);

        // almacenar en la bd
        const resultado = await usuario.save();

        return resultado;
    } catch (error) {
        console.log(error);
    }
}
export const actualizarUsuario = async (_, {id, input}) => {
    // revisar si el producto existe o no
    let usuario = await Usuario.findById(id);

    if(!usuario) {
        throw new Error('Usuario no encontrado');
    }

    // guardarlo en la base de datos
    usuario = await Usuario.findOneAndUpdate({ _id : id }, input, { new: true } );

    return usuario;
}
export const eliminarUsuario = async(_, {id}) => {
    // revisar si el Usuario existe o no
    let usuario = await Usuario.findById(id);

    if(!usuario) {
        throw new Error('Usuario no encontrado');
    }

    // Eliminar
    await Usuario.findOneAndDelete({_id :  id});

    return "Usuario Eliminado";
}

export const autenticarUsuario =async(_, {input}) =>{
    const {email,password} = input;
    
    const existeUsuario = await Usuario.findOne({email,dni})
    if (!exiteUsuario){
        throw new Error('El Usuario no Existe');
    }

    const passwordCorrecto = await bcrypt.compare(password, existeUsuario.password)
    if (!passwordCorrecto){
        throw new Error('El password es incorrect');
    } 
}

export default {
    TYPES: {
    },
    QUERIES: {
        obtenerUsuarios,
        obtenerUsuario
    },
    MUTATIONS: {
      nuevoUsuario,
      actualizarUsuario,
      eliminarUsuario
    }
}