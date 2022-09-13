const axios = require('axios');

function getBestShows (req, res) {
    let filter = req.query.filter;
    let bestURL = `https://api.simkl.com/tv/best/${filter}?type=series&client_id=${prcoess.env.ANIME_KEY}`
    
    axios.get(bestURL).then(result => {
        let showsArr = result.data;
        const tvShow = showsArr.map(item => new Shows(item));
        res.send(tvShow);
    }).catch(error => {
        res.send(error.message);
    })
}




class Shows {
    constructor(item) {
        this.title = item.title;
        this.year = item.year;
        this.poster = `https://simkl.in/posters/${item.poster}_c.webp`;
        this.rating = item.ratings.imdb.rating;
        
   
    }
}
module.exports = getBestShows;