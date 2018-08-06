module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: true,
      unique: true,
      autoIncrement: false
    },

    nombre: {
      type:'string',
      required:true
    },

    descripcion: {
      type:'string',
      required:true
    }

  },

};

