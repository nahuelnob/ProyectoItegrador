const axios = require("axios");

const getCharById = (res, id) => {
  let character = {};
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => {
      (character = {
        id: data.data.id,
        name: data.data.name,
        gender: data.data.gender,
        species: data.data.species,
        origin: data.data.origin,
        image: data.data.image,
        status: data.data.status,
      }),
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((error)=> {
        res.writeHead(500, { "Content-type": "text/plain" })
        res.end(error.message)
    });
};

module.exports = getCharById