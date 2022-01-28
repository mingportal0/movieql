import {createServer} from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';

//Create Server
const server = createServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers
});
server.start(() => console.log("Graphql Server Running!"));