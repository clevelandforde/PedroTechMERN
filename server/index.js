const express = require("express");
const app = express();
const mongoose = require("mongoose");
const RegisterationModel = require("./Models/Registrations");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Forde:Test4321@register.0gsaj.mongodb.net/GDF-Forms?retryWrites=true&w=majority"
);

app.get("/getRegistrations", (req, res) => {
  RegisterationModel.find({}, (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

app.post("/createRegistration", async (req, res) => {
  const registration = req.body;
  const newRegistration = new RegisterationModel(registration);
  await newRegistration.save();

  res.json(registration);
});

app.listen(3001, () => {
  console.log("Hello MERN!");
});
