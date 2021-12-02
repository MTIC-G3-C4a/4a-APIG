const doctorResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.userDetailById(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            const doctorInput = {
                username: userInput.username,
                cedula: userInput.cedula,
                password: userInput.password,
                nombre: userInput.nombre,
                correo: userInput.correo,
                especialidad: userInput.especialidad,
            }
            return await dataSources.authAPI.signUpUser(doctorInput);

        },
        
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.authAPI.logIn(credentials),

        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),

    }
};
module.exports = doctorResolver;
