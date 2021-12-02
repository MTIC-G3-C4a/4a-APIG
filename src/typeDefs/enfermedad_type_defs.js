const { gql } = require("apollo-server");

const enfermedadTypeDefs = gql`
  type Enfermedad {
    nombre: String!
    sintomas: [String]!
    medicina: [String]!
  }
  input EnfermedadInput {
    nombre: String!
    sintomas: [String]!
    medicina: [String]!
  }
  type Query {
    getAllEnfermedades: [Enfermedad]!
    getEnfermedadByName(nombre: String!): Enfermedad
    getEnfermedadesPaciente(documento: String!): [Enfermedad]
  }
  type Mutation {
    createEnfermedad(enfermedad: EnfermedadInput!): Enfermedad
    updateEnfermedad(enfermedad: EnfermedadInput!): Enfermedad
    deleteEnfermedad(nombre: String!): String
  }
`;
module.exports = enfermedadTypeDefs;