module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true
    },

    codigoConfirmacion: {
      type:'string',
      required:true
    },

    fechaPeticion: {
      type:'string',
      required:true
    },

    fechaAprobacion: {
      type:'string',
      required:false
    },

    persona: {
      model: 'Persona'
    },

    dispositivoAcceso: {
      model: 'DispositivoAcceso'
    }

  },

};

