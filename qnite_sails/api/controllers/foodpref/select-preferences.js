module.exports = {


  friendlyName: 'Select preferences',


  description: '',


  inputs: {

    name: {
      required: false,
      type: 'string',
      description: 'a test.'
    }

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'show a thing',
      viewTemplatePath: 'pages/foodpref/select-preferences.ejs'
    }

  },


  fn: async function (inputs, exits) {
    foods = sails.config.custom.qnite.testjson.foods
    this.res.foods = foods
    return exits.success();

  }


};
