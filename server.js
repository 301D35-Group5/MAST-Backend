"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
server.use(cors());

const recoModel = require("./Recommendation.js");

const profModel = require("./Profile.js");

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

//here tv
const getShows = require("./TV");
const getBestShows = require("./BestShows");
server.get("/Shows", getShows);
server.get("/BestShows", getBestShows);

//here recommendation
server.get("/getReco", getRecoHandler);
server.post("/addReco", addRecoHandler);
server.delete("/deleteReco/:id", deleteRecoHandler);
server.put("/updateReco/:id", updateRecoHandler);

//http:localhost:3001/getReco
function getRecoHandler(req, res) {
  recoModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
}

//http://localhost:3001/addReco
async function addRecoHandler(req, res) {
  const { img, seriesName, description, rating, year, email } = req.body; //for strcture
  await recoModel.create({
    img: img,
    seriesName: seriesName,
    description: description,
    rating: rating,
    year: year,
    email: email,
  });
  recoModel.find({email:email}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.json(result);
    }
  });
}

//http://localhost:3001/deleteReco:id
function deleteRecoHandler(req, res) {
  const recoID = req.params.id;
  console.log(recoID);
  recoModel.deleteOne({ _id: recoID }, (err, result) => {
    recoModel.find({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    });
  });
}

//http://localhost:3001/updateReco/:id
function updateRecoHandler(req, res) {
  const id = req.params.id;
  const { seriesName, description, rating, year,email } = req.body;
  recoModel.findByIdAndUpdate(id, { seriesName, description, rating, year,email }, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      // console.log(result);
      res.json(result);
    }
  })
}
//here profile
server.get("/getProf", getProfHandler);
server.post("/addProf", addProfHandler);
server.delete("/deleteProf", deleteProfHandler);

//http:localhost:3001/getProf
function getProfHandler(req, res) {
  const email = req.query.email;
  profModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
}

//http://localhost:3001/addProf
async function addProfHandler(req, res) {
  const { poster, title, email } = req.body; //for strcture
  await profModel.create({
    poster: poster,
    title: title,
    email: email,
  });
  profModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.json(result);
    }
  });
}

//delete a watchList
//http://localhost:3001/deleteProf/:id
function deleteProfHandler(req, res) {
  const profID = req.query.id;
  const email = req.query.email;
  console.log(profID);
  profModel.deleteOne({ _id: profID }, (err, result) => {
    profModel.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    });
  });
}

server.listen(PORT, () => console.log(`listening on ${PORT}`));
