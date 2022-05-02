import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: () => getById(),
  },
};

export default resolvers;
