const { gql } = require('apollo-server');

const doctorTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        cedula: String!
        password: String!
        nombre: String!
        correo: String!
        especialidad: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        cedula: String!
        password: String!
        nombre: String!
        correo: String!
        especialidad: String!
    }

    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;

module.exports = doctorTypeDefs;