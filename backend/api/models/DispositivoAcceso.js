module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    numeroSerie: {
      type:'string',
      required:true
    },

    direccionMAC: {
      type:'string',
      required:true
    },

    nombre: {
      type:'string',
      required:true
    },

    tipoEspacio: {
      model: 'TipoEspacio'
    },

    lugar: {
      model: 'Lugar'
    }

  },

};

