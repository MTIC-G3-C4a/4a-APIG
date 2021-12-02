const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.doctor_api.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
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

            // const pacienteInput = {
            //     documento: userInput.documento,
            //     tipoDocumento: userInput.tipoDocumento,
            //     nombre: userInput.nombre,
            //     edad: userInput.edad,
            //     genero: userInput.genero,
            //     celular: userInput.celular,
            //     correo: userInput.correo,
            //     observaciones: userInput.observaciones,
            //     sintomas: (Array.prototype.toString()),
            // }
            // await dataSources.authAPI.createPaciente(pacienteInput);

            // const enfermedadInput = {
            //     nombre: userInput.nombre ,
            //     sintomas: (Array.prototype.toString()),
            //     medicina: (Array.prototype.toString()),
            // }
            // return await dataSources.authAPI.createEnfermedad(enfermedadInput);
        },
        
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.doctor_api.authRequest(credentials),

        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.doctor_api.refreshToken(refresh),

    }
};
module.exports = usersResolver;