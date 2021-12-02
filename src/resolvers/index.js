const pacienteResolver = require('./paciente_resolver');
const enfermedadResolver = require('./enfermedad_resolver');
const doctorResolver = require('./doctor_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(pacienteResolver, enfermedadResolver, doctorResolver);

module.exports = resolvers;