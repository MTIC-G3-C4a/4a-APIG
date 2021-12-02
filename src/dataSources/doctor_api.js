const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async signUpUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user); // En los typeDefs es userInput
    }

    async userDetailById(userId) {
        return await this.get(`/user/${userId}/`); //¿Importa si es doctorId en la base de datos?
    }

    async logIn(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token); //En los typeDefs token es refresh
    }

}

module.exports = AuthAPI;