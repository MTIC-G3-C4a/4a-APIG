const { gql } = require("apollo-server");

const pacienteTypeDefs = gql`
  type Paciente {
    documento: String!
    tipoDocumento: String!
    nombre: String!
    edad: Int!
    genero: String!
    celular: Int!
    correo: String!
    observaciones: String!
    sintomas: [String]!
  }

  input PacienteInput {
    documento: String!
    tipoDocumento: String!
    nombre: String!
    edad: Int!
    genero: String!
    celular: Int!
    correo: String!
    observaciones: String!
    sintomas: [String]!
  }
  type Query {
    getAllPacientes: [Paciente]!
    pacienteById(documento:String!):Paciente

  }
  type Mutation {
    createPaciente(paciente:PacienteInput!): Paciente
    updatePaciente(paciente:PacienteInput!): Paciente
    deletePaciente(documento:String!): String
  }
`;
module.exports = pacienteTypeDefs;