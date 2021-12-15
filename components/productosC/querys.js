import { gql } from '@apollo/client'

export const OBTENER_PRODUCTOS = gql`
    query obtenerProductos{
        obtenerProductos{
            id
            codigo
            Nombre
            descripcion
            precio
            cantidad
        }
}    

`