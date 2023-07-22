let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(201).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));

  res.status(201).json(myFavorites);
};

module.exports = { postFav, deleteFav };
