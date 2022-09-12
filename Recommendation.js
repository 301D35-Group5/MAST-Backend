"use strict";

const mongoose = require("mongoose");

const recoSchema = new mongoose.Schema({
  img: String,
  seriesName: String,
  description: String,
  rating: String,
  year: String,
});

const recoModel = mongoose.model("recommendation", recoSchema);
async function seedData() {
  const firstReco = new recoModel({
    img: "https://occ-0-1123-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608",
    seriesName: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    rating: "8.8/10",
    year: "2013",
  });

  const secondtReco = new recoModel({
    img: "https://occ-0-1123-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608",
    seriesName: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    rating: "8.7/10",
    year: "2016",
  });

  const thirdReco = new recoModel({
    img: "https://occ-0-1123-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608",
    seriesName: "Attack on Titan",
    description:
      "Witnessing the fullness of the Titan horror first-hand, a young and tenacious Eren Jaeger vows to rid the world of all Titans and win back freedom for mankind.",
    rating: "9/10",
    year: "2013",
  });

  const fourthReco = new recoModel({
    img: "https://occ-0-1123-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608",
    seriesName: "Death Note",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    rating: "9/10",
    year: "2006",
  });

  await firstReco.save();
  await secondtReco.save();
  await thirdReco.save();
  await fourthReco.save();
}

// seedData();

module.exports = recoModel;
