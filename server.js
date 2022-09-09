"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const server = express();
server.use(cors());

// access req.body
server.use(express.json());

const PORT = process.env.PORT || 3001;

 mongoose.connect("mongodb://localhost:27017/tourism", { //locally
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



//

server.listen(PORT, () => console.log(`listening on ${PORT}`));
