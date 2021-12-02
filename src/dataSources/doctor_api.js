const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async signUpUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    async userDetailById(userId) {
        return await this.get(`/user/${userId}/`);
    }

    async logIn(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(refresh) {
        refresh = new Object(JSON.parse(JSON.stringify({ refresh: refresh })));
        return await this.post(`/refresh/`, refresh);
    }

}

module.exports = AuthAPI;