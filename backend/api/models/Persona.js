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

    apellido: {
      type:'string',
      required:true
    },

    direccion: {
      type:'string',
      required:true
    },

    telefono: {
      type:'string',
      required:true
    },

    email: {
      type:'string',
      required:true
    },

    lugares: {
      collection: 'Lugar',
      via: 'personas'
    }

  },

};

