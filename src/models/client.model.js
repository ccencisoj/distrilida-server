const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  uuid: {type: String, required: true},
  name: {type: String, required: true},
  nDocument: {type: Number, required: true}
});

const ClientModel = model("Client", ClientSchema);

module.exports = ClientModel;