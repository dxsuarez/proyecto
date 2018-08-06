module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    nombre: {
      type:'string',
      required:true
    },

    descripcion: {
      type:'string',
      required:true
    },

    personas: {
      collection: 'Persona',
      via: 'lugares'
    }

  },

};

