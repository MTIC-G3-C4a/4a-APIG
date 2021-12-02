const enfermedadResolver = {
    Query: {
        getEnfermedad: async (_, { nombre }, { dataSources }) => {
            return await dataSources.paciente_api.getEnfermedad(nombre)
        }, 
        getEnfermedades: async (_, { dataSources }) => {
            return await dataSources.paciente_api.getEnfermedades
        },
        enfermedadesPaciente: async (_, { documento }, { dataSources }) => {
            return await dataSources.paciente_api.enfermedadesPaciente(documento)
        }, 
    },
    Mutation: {
        newEnfermedad: async (_, { EnfermedadInput }, { dataSources }) => {
            const EnfermedadInput = {
                    nombre: userInput.nombre ,
                    sintomas: (Array.prototype.toString()),
                    medicina: (Array.prototype.toString()),
            }
            return await dataSources.paciente_api.newEnfermedad(EnfermedadInput);
        },
        updateEnfermedad: async (_, { Enfermedad }, { dataSources }) => {
            return await dataSources.paciente_api.updateEnfermedad(Enfermedad)
        },

        delEnfermedad: async (_, { Enfermedad }, { dataSources }) => {
            return await dataSources.paciente_api.delEnfermedad(Enfermedad)
        }    
    }
};
module.exports = enfermedadResolver;