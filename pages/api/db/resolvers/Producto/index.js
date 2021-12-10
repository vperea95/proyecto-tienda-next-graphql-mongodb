import ProductoResolver from './Producto'

export default {
  TYPES: {
    ...ProductoResolver.TYPES
  },
  QUERIES: {
    ...ProductoResolver.QUERIES
  },
  MUTATIONS: {
    ...ProductoResolver.MUTATIONS
  }
}
