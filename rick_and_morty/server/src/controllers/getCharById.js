const axios = require("axios");

const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const {id} = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { id, name, gender, species, origin, image, status } = data;
      const character =  { id, name, gender, species, origin, image, status }
      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
