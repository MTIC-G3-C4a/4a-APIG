const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PacienteAPI extends RESTDataSource {
    
    constructor() {
    super();
    this.baseURL = serverConfig.paciente_api_url;
    }

    async createPaciente(paciente) {
        paciente = new Object(JSON.parse(JSON.stringify(paciente)));
        // paciente = new Object(paciente);
        return await this.post('/pacientes/paciente', paciente);
    }

    async getAllPacientes(){
        return await this.get('/pacientes/');
    }

    async pacienteById(idPaciente){
        return await this.get(`/pacientes/${idPaciente}`); // En los typeDefs documento es idPaciente
    }

    async updatePaciente(paciente){
        paciente = new Object(JSON.parse(JSON.stringify(paciente)));
        // paciente = new Object(paciente);
        let pacienteId = paciente.documento;
        return await this.put(`/pacientes/updatePaciente/${pacienteId}`); // En los typeDefs están pidiendo el idPaciente
    }

    async deletePaciente(idPaciente){
        return await this.delete(`/pacientes/deletePaciente/${idPaciente}`); // En los typeDefs documento es idPaciente
    }

    async createEnfermedad(enfermedad){
        enfermedad = new Object(JSON.parse(JSON.stringify(paciente)));
        // enfermedad = new Object(enfermedad);
        return await this.post("/enfermedad",enfermedad);
    }

    async getAllEnfermedades(){
        return await this.get('/enfermedades');
    }

    async getEnfermedadByName(name){
        return await this.get(`/enfermedad/${name}`);
    }

    async getEnfermedadesPaciente(documento){
        return await this.get(`/enfermedades/${documento}`)
    }

    async updateEnfermedad(enfermedad){
        enfermedad = new Object(JSON.parse(JSON.stringify(enfermedad)));
        // enfermedad = new Object(enfermedad);
        let enfermedadId = enfermedad.nombre;
        return await this.put(`/actualizarEnfermedad/${enfermedadId}`);
    }

    async deleteEnfermedad(nombre){
        return await this.delete(`/eliminarEnfermedad/${nombre}`);
    }
}

module.exports = PacienteAPI;