const pacienteResolver = {
    Query: {
        pacienteById: async (_, { documento }, { dataSources }) => {
            return await dataSources.pacienteAPI.pacienteById(documento)
        }, 
        getAllPacientes: async (_, { Paciente }, { dataSources }) => {
            return await dataSources.pacienteAPI.getAllPacientes(Paciente)
        },
    },
    Mutation: {
        createPaciente: async (_, { paciente }, { dataSources }) => {
            const Paciente = {
                documento: paciente.documento,
                tipoDocumento: paciente.tipoDocumento,
                nombre: paciente.nombre,
                edad: paciente.edad,
                genero: paciente.genero,
                celular: paciente.celular,
                correo: paciente.correo,
                observaciones: paciente.observaciones,
                sintomas: paciente.sintomas,
            }
            return await dataSources.pacienteAPI.createPaciente(Paciente);
        }, 
        updatePaciente: async (_, { paciente }, { dataSources }) => {
            return await dataSources.pacienteAPI.updatePaciente(paciente)
        },

        deletePaciente: async (_, { documento }, { dataSources }) => {
            return await dataSources.pacienteAPI.deletePaciente(documento)
        }
    }
};
module.exports = pacienteResolver;