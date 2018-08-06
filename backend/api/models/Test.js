module.exports = {

  attributes: {

    name:{
      type:'string',
      required:true
    }

  },

  afterCreate: function(entry, cb) {
    sails.sockets.blast({
      msg: entry
    });
    cb();
  }

};

