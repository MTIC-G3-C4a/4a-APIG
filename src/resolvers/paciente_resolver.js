const pacienteResolver = {
    Query: {
        getPaciente: async (_, { documento }, { dataSources }) => {
            return await dataSources.paciente_api.getPaciente(documento)
        }, 
        getAllPacientes: async (_, { dataSources }) => {
            return await dataSources.paciente_api.getAllPacientes
        },
    },
    Mutation: {
        createPaciente: async (_, { PacienteInput }, { dataSources }) => {
            const PacienteInput = {
                documento: userInput.documento,
                tipoDocumento: userInput.tipoDocumento,
                nombre: userInput.nombre,
                edad: userInput.edad,
                genero: userInput.genero,
                celular: userInput.celular,
                correo: userInput.correo,
                observaciones: userInput.observaciones,
                sintomas: (Array.prototype.toString()),
            }
            return await dataSources.paciente_api.createPaciente(PacienteInput);
        }, 
        updatePaciente: async (_, { Paciente }, { dataSources }) => {
            return await dataSources.paciente_api.updatePaciente(Paciente)
        },

        deletePaciente: async (_, { Paciente }, { dataSources }) => {
            return await dataSources.paciente_api.deletePaciente(Paciente)
        }
    }
};
module.exports = pacienteResolver;