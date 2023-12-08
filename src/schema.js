export const typeDefs = `#graphql
    
    type Gamers {
        ID: String!
        Name : String!
        Age : Int!
    },
    type Authors {
        ID:ID!
        Name:String!
        number:Int!
    }
    type Reviews {
        ID:ID!
        message:String!
        author : Authors!
    }

    type Query {
        Gamers:[Gamers!]!
        Authors:[Authors!]!
        Reviews:[Reviews!]!
    }
`;
