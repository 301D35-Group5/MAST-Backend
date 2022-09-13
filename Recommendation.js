"use strict";

const mongoose = require("mongoose");

const recoSchema = new mongoose.Schema({
  img: String,
  seriesName: String,
  description: String,
  rating: String,
  year: String,
  email : String
});

const recoModel = mongoose.model("recommendation", recoSchema);
async function seedData() {
  const firstReco = new recoModel({
    img: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    seriesName: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    rating: "8.8/10",
    year: "2013",
    email : ""
  });

  const secondtReco = new recoModel({
    img: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    seriesName: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    rating: "8.7/10",
    year: "2016",
    email : ""

  });

  const thirdReco = new recoModel({
    img: "https://gatecima.com/wp-content/uploads/2021/10/41c96e29f0b141d6c34d7e1d7cc1eb06-627-poster.jpg",
    seriesName: "Attack on Titan",
    description:
      "Witnessing the fullness of the Titan horror first-hand, a young and tenacious Eren Jaeger vows to rid the world of all Titans and win back freedom for mankind.",
    rating: "9/10",
    year: "2013",
    email : ""

  });

  const fourthReco = new recoModel({
    img: "https://cdn.europosters.eu/image/750/death-note-from-the-shadows-i58005.jpg",
    seriesName: "Death Note",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    rating: "9/10",
    year: "2006",
    email : ""

  });

  await firstReco.save();
  await secondtReco.save();
  await thirdReco.save();
  await fourthReco.save();
}

seedData();

module.exports = recoModel;
