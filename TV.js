const axios = require('axios');

async function getShows(req,res) {
const genre = req.query.genre;
const year =req.query.year
  const URL = `https://api.simkl.com/tv/genres/${genre}/${year}/sort?client_id=8bec25d423932d853d8896015f620b330266cabb0fec2cccb2886c2817860dc4
  `;

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
    this.rating = item.ratings.imdb.rating
    this.poster = `https://simkl.in/posters/${item.poster}_c.webp`
  }
}




  
  module.exports = getShows;