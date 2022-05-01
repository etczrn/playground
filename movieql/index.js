import { GraphQLServer } from "graphql-yoga";

// console.log("I'm testing...");

const server = new GraphQLServer({});

server.start(() => console.log("GraphQL Server running..."));
