module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    nombre: {
      type: 'string',
      required: true
    },

    contrasenia: {
      type: 'string',
      required: true
    },

    persona: {
      model: 'Persona'
    },

    perfilId: {
      type: 'number'
    }
  },

};

