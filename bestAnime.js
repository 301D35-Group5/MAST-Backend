const axios = require('axios');

function getBestAnime (req, res) {
    let key = process.env.ANIME_KEY;
    let filter = req.query.filter;
    let bestAnimeUrl = `https://api.simkl.com/anime/best/${filter}?client_id=${key}`
    
    axios.get(bestAnimeUrl).then(result => {
        let animeArr = result.data;
        const anime = animeArr.map(anime => new Anime(anime));
        res.send(anime);
    }).catch(error => {
        res.send(error.message);
    })
}




class Anime {
    constructor(anime) {
        this.title = anime.title;
        this.year = anime.year;
        this.poster = `https://simkl.in/posters/${anime.poster}_c.webp`;
        this.malRating = anime.ratings.mal.rating;
        this.simklRating = anime.ratings.simkl.rating;
   
    }
}
module.exports = getBestAnime;