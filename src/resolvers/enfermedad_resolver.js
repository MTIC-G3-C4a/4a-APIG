const enfermedadResolver = {
    Query: {
        getEnfermedadByName: async (_, { nombre }, { dataSources }) => {
            return await dataSources.pacienteAPI.getEnfermedadByName(nombre)
        }, 
        getAllEnfermedades: async (_, { Enfermedad }, { dataSources }) => {
            return await dataSources.pacienteAPI.getAllEnfermedades(Enfermedad)
        },
        getEnfermedadesPaciente: async (_, { documento }, { dataSources }) => {
            return await dataSources.pacienteAPI.getEnfermedadesPaciente(documento)
        }, 
    },
    Mutation: {
        createEnfermedad: async (_, { enfermedad }, { dataSources }) => {
            const Enfermedad = {
                    nombre: enfermedad.nombre ,
                    sintomas: enfermedad.sintomas,
                    medicina: enfermedad.medicina,
            }
            return await dataSources.pacienteAPI.createEnfermedad(Enfermedad);
        },
        updateEnfermedad: async (_, { enfermedad }, { dataSources }) => {
            return await dataSources.pacienteAPI.updateEnfermedad(enfermedad)
        },

        deleteEnfermedad: async (_, { nombre }, { dataSources }) => {
            return await dataSources.pacienteAPI.deleteEnfermedad(nombre)
        }    
    }
};
module.exports = enfermedadResolver;