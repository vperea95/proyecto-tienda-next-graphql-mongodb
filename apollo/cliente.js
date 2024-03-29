import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    connectToDevTools:true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:3000/api/graphql',
        fetch
    })
})

export default client