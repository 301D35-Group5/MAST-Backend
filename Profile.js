"use strict";

const mongoose = require("mongoose");

const profSchema = new mongoose.Schema({
  poster: String,
  title: String,
  email: String,
});

const profModel = mongoose.model("profile", profSchema);
async function seedData() {
  const firstWatch = new profModel({
    poster:
      "https://www.cinemascomics.com/wp-content/uploads/2020/11/Stephen-Amell-revela-por-que-quiso-regresar-como-Arrow.jpg",
    title: "Arrow",
    email: "Asad111@gmail.com",
  });

  await firstWatch.save();
}

// seedData();

module.exports = profModel;
