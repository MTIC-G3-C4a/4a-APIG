const { gql } = require("apollo-server");

const enfermedadTypeDefs = gql`
  type Enfermedad {
    nombre: String!
    sintomas: [String]!
    medicina: [String]!
  }
  type EnfermedadInput {
    nombre: String!
    sintomas: [String]!
    medicina: [String]!
  }
  type Query {
    getAllEnfermedades: [Enfermedad]!
    getEnfermedadByName(name: String!): Enfermedad
    getEnfermedadesPaciente(documento: String!): [Enfermedad]
  }
  type Mutation {
    createEnfermedad(enfermedad: EnfermedadInput!): Enfermedad
    updateEnfermedad(nombre: String!, enfermedad: EnfermedadInput!): Enfermedad
    deleteEnfermedad(nombre: String!): Enfermedad
  }
`;
