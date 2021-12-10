import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import Cors from 'micro-cors'
import typeDefs from "./db/graphql/typeDefs";
import resolvers from "./db/resolvers/index";


const conectarDB = require('./config/db');
conectarDB();

export const config = {
  api: {
    bodyParser: false,
  },
};
const cors = Cors();
const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
const startServer = server.start();
export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
