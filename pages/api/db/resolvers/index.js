
import ProductoResolver from './Producto'
import UsuarioResolver from './Usuario'


export default {
  
  ...ProductoResolver.TYPES,
  ...UsuarioResolver.TYPES,

        Query: {
    ...ProductoResolver.QUERIES,
    ...UsuarioResolver.QUERIES
    },
    Mutation: {
    ...ProductoResolver.MUTATIONS,
    ...UsuarioResolver.MUTATIONS
    }
}
