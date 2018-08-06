/**
 * RelacionPersona.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    esPrincipal: {
      type:'boolean',
      required:true
    },

    tipoRelacionPersona: {
      model: 'TipoRelacionPersona'
    },

    persona: {
      model: 'Persona'
    },

    grupoPersona: {
      model: 'GrupoPersona'
    }

  },

};

