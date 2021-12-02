const doctorResolver = {
    Query: {
        DoctorDetailView: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.doctor_api.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        DoctorCreateView: async (_, { userInput }, { dataSources }) => {
            const doctorInput = {
                id: userInput.id,
                username: userInput.username,
                cedula: userInput.cedula,
                password: userInput.password,
                nombre: userInput.nombre,
                correo: userInput.correo,
                especialidad: userInput.especialidad,
            }
            return await dataSources.doctor_api.createDoctor(doctorInput);

        },
        
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.doctor_api.authRequest(credentials),

        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.doctor_api.refreshToken(refresh),

    }
};
module.exports = doctorResolver;