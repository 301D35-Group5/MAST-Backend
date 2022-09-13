const axios = require('axios');

async function getShows(req,res) {
const genre = req.query.genre;
const year =req.query.year
  const URL = `https://api.simkl.com/tv/genres/${genre}/${year}/sort?client_id=${process.env.ANIME_KEY}`;

  axios.get(URL).then( result => {
    let showsArr = result.data;
    const tvShow = showsArr.map(item => new Shows(item));
    res.send(tvShow);

      })

  }


class Shows {
  constructor(item) {
    this.title = item.title,
    this.year = item.year,
    this.rating = item.ratings.simkl.rating
    this.poster = `https://simkl.in/posters/${item.poster}_c.webp`
  }
}




  
  module.exports = getShows;