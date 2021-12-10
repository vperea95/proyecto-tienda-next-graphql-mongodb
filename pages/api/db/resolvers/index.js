
import ProductoResolver from './Producto'

export default {
  
  ...ProductoResolver.TYPES,

        Query: {
    ...ProductoResolver.QUERIES
    },
    Mutation: {
    ...ProductoResolver.MUTATIONS
    }
}
