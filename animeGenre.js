const axios = require('axios');

function getAnimeGenre (req, res) {
    let genre = req.query.genre;
    let key = process.env.ANIME_KEY;
    let animeGenreUrl = `https://api.simkl.com/anime/genres/${genre}?client_id=${key}`
    
    axios.get(animeGenreUrl).then(result => {
        let animeArr = result.data;
        const anime = animeArr.map(anime => new Anime(anime));
        console.log(genre);
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
module.exports = getAnimeGenre;