const mongoose = require("mongoose");
const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  regNo: {
    type: Number,
    required: true,
  },
});

const RegistrationModel = mongoose.model("Registrations", RegistrationSchema);
module.exports = RegistrationModel;
