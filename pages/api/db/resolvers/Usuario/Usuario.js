import jwt from 'jsonwebtoken'
import Usuario from '../../../models/Usuario'
import bcryptjs from 'bcryptjs'
require('dotenv').config({ path: '.env' });


const crearToken = (usuario, secreta, expiresIn) => {
    // console.log(usuario);
    const { id, email, primerNombre, primerApellido } = usuario;

    return jwt.sign({ id, email, primerNombre, primerApellido }, secreta, { expiresIn })
}

export const nuevoUsuario = async (_, { input }) => {
    const { email, password } = input;
    // revisa si el imail existe en la base de datos
    const usuarioExiste = await Usuario.findOne({ email })
    if (usuarioExiste) {
        throw new Error('El usuario ya esta Registrado');
    }
    //hash de password
    const salt = await bcryptjs.genSalt(10);
    input.password = await bcryptjs.hash(password, salt)
    //Creacion de usuario
    try {
        const usuario = new Usuario(input);
        usuario.save();
        return usuario;
    } catch (error) {
        console.log(error);
    }
}
export const autenticarUsuario = async (_, { input }) => {

    const { email, password } = input;

    // Si el usuario existe
    const existeUsuario = await Usuario.findOne({ email });
    if (!existeUsuario) {
        throw new Error('El usuario no existe');
    }

    // Revisar si el password es correcto
    const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
    if (!passwordCorrecto) {
        throw new Error('El Password es Incorrecto');
    }

    // Crear el token
    return {
        token: crearToken(existeUsuario, process.env.SECRETA, '5m')
    }

}
export const obtenerUsuario = async (_, { token }) => {
    const usuarioId = await jwt.verify(token, process.env.SECRETA);
    return usuarioId
}

export default {
    TYPES: {
    },
    QUERIES: {
        obtenerUsuario
    },
    MUTATIONS: {
        nuevoUsuario,
        autenticarUsuario
    }
}