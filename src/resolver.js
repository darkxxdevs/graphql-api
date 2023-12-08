// schema imports
import db from "./_db.js";

const resolvers = {
  Query: {
    Gamers: () => db.Gamers,
    Authors: () => db.Authors,
    Reviews: () => db.Reviews,
  },
};

export default resolvers;
