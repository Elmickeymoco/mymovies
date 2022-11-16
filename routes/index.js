var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const API_Key = process.env.OWM_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}`)
    .then((response) => response.json())
    .then((apiData) => {
      console.log(apiData);
      res.json({ movies: apiData.results });
    });
});













module.exports = router;
