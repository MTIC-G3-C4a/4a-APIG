const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PacienteAPI extends RESTDataSource {
    
    constructor() {
    super();
    this.baseURL = serverConfig.paciente_api_url;
    }

    async createPaciente(paciente) {
        paciente = new Object(JSON.parse(JSON.stringify(paciente)));
        return await this.post('/pacientes/paciente', paciente);
    }

    async getAllPacientes(Paciente){
        return await this.get('/pacientes/', Paciente);
    }

    async pacienteById(documento){
        return await this.get(`/pacientes/${documento}`); 
    }

    async updatePaciente(paciente){
        paciente = new Object(JSON.parse(JSON.stringify(paciente)));
        let pacienteId = paciente.documento;
        return await this.put(`/pacientes/updatePaciente/${pacienteId}`, paciente);
    }

    async deletePaciente(documento){
        return await this.delete(`/pacientes/deletePaciente/${documento}`);
    }

    async createEnfermedad(enfermedad){
        enfermedad = new Object(JSON.parse(JSON.stringify(enfermedad)));
        return await this.post("/enfermedad",enfermedad);
    }

    async getAllEnfermedades(Enfermedad){
        return await this.get('/enfermedades',Enfermedad);
    }

    async getEnfermedadByName(nombre){
        return await this.get(`/enfermedad/${nombre}`);
    }

    async getEnfermedadesPaciente(documento){
        return await this.get(`/enfermedades/${documento}`)
    }

    async updateEnfermedad(enfermedad){
        enfermedad = new Object(JSON.parse(JSON.stringify(enfermedad)));
        let enfermedadId = enfermedad.nombre;
        return await this.put(`/actualizarEnfermedad/${enfermedadId}`, enfermedad);
    }

    async deleteEnfermedad(nombre){
        return await this.delete(`/eliminarEnfermedad/${nombre}`);
    }
}

module.exports = PacienteAPI;