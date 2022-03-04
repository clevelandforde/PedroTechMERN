const express = require("express");
const app = express();
const mongoose = require("mongoose");
const RegistrationModel = require("./Models/Registrations");

const cors = require("cors");  // This allows us to connect this api with our react frontend
// const { request } = require("express");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Forde:Test4321@register.0gsaj.mongodb.net/GDF-Forms?retryWrites=true&w=majority"
);

app.get("/getRegistrations", (req, res) => {
  RegistrationModel.find({}, (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

app.post("/createRegistration", async (req, res) => {
  const registration = req.body;
  const newRegistration = new RegistrationModel(registration);
  await newRegistration.save();

  res.json(registration);
});

app.listen(3001, () => {
  console.log("Hello MERN!");
});
