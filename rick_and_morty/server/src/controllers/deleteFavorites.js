const { Favorite } = require("../DB_connection");

const deleteFavorites = async (id) => {
  const deleteFav = await Favorite.findByPk(id);
  const aux = { ...deleteFav };
  await deleteFav.destroy();
  return aux;
};

module.exports = deleteFavorites;
