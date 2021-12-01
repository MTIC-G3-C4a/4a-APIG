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

  type PacienteInput {
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
    getAllPacientes(): [Paciente]!
    pacienteById(idPaciente:String!):Paciente

  }
  type Mutation {
    createPaciente(paciente:PacienteInput!): Paciente
    updatePaciente(idPaciente: String!,paciente:PacienteInput!): Paciente
    deletePaciente(idPaciente:String!)
  }
`;
