const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/";

const obj = {
  name: "",
  firstFilm: "",
  firstSpecies: "",
  homeWorldForSpecie: "",
};

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  fetch(URL + id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      obj.name = data.name;
      return fetch(data.films[0]);
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      obj.firstFilm = data.title;
      return fetch(data.species[0]);
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      obj.firstSpecies = data.name;
      return fetch(data.homeworld);
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      obj.homeWorldForSpecie = data.name;
    })
    .catch((err) => {
      console.log(err);
    });
  setTimeout(() => {
    console.log(obj);
  }, 5000);
}
getPlanetforFirstSpeciesInFirstMovieForPerson(1);
