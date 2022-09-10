'use strict'

const mongoose = require('mongoose');

const recoSchema = new mongoose.Schema({
  seriesName: String,
  description: String,
  rating: String,
  year: String
});

const recoModel = mongoose.model('recommendation', recoSchema);
async function seedData() {
  const firstReco = new recoModel({
    seriesName: "Peaky Blinders",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    rating: "8.8/10",
    year: "2013"
  });

  const secondtReco = new recoModel({
    seriesName: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    rating: "8.7/10",
    year: "2016"
  });

  const thirdReco = new recoModel({
    seriesName: "Attack on Titan",
    description: "Witnessing the fullness of the Titan horror first-hand, a young and tenacious Eren Jaeger vows to rid the world of all Titans and win back freedom for mankind.",
    rating: "9/10",
    year: "2013"
  });

  const fourthReco = new recoModel({
    seriesName: "Death Note",
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    rating: "9/10",
    year: "2006"
  });


  await firstReco.save();
  await secondtReco.save();
  await thirdReco.save();
  await fourthReco.save();

}

// seedData();



module.exports = recoModel;
