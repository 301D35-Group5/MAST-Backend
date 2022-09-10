"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
server.use(cors());
const recoModel = require('./Recommendation.js')
// access req.body
server.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/tourism", {
  //locally
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//ROUTES
// http://localhost:3001/
server.get("/", (req, res) => {
  res.send("hello from the home route");
});
// http://localhost:3001/test
server.get("/test", (req, res) => {
  res.send("test request received");
});

// http://localhost:3001/bestAnime
let getBestAnime = require("./bestAnime.js");
server.get("/bestAnime", getBestAnime);

// http://localhost:3001/animeGenre
let getAnimeGenre = require("./animeGenre.js");
server.get("/animegenre", getAnimeGenre);


server.get('/getReco', getRecoHandler);
server.post('/addReco', addRecoHandler);
server.delete('/deleteReco/:id', deleteRecoHandler);
server.put('/updateReco/:id', updateRecoHandler);

//http:localhost:3001/getReco
function getRecoHandler(req, res) {
  recoModel.find({}, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result);
      res.send(result);
    }
  })
}

//http://localhost:3001/addReco
async function addRecoHandler(req, res) {
  const { seriesName, description, rating, year } = req.body; //for strcture
  await recoModel.create({
    seriesName: seriesName,
    description: description,
    rating: rating,
    year: year
  });
  recoModel.find({}, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result);
      res.json(result);
    }
  })
}

//http://localhost:3001/deleteReco:id
function deleteRecoHandler(req, res) {
  const recoID = req.params.id;
  console.log(recoID);
  recoModel.deleteOne({ _id: recoID }, (err, result) => {
    recoModel.find({}, (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(result);
        res.send(result);
      }
    })
  })
}

//http://localhost:3001/updateReco/:id
function updateRecoHandler(req, res) {
  const id = req.params.id;
  const { seriesName, description, rating, year } = req.body;
  recoModel.findByIdAndUpdate(id, { seriesName, description, rating, year }, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result);
      res.json(result);
    }
  })
}




//

server.listen(PORT, () => console.log(`listening on ${PORT}`));
