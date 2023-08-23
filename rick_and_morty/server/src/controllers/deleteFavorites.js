const { Favorite } = require("../DB_connection");
const nahue = () => console.log('nahue');

const deleteFavorites = async (id) => {
  const deleteFav = await Favorite.findByPk(id);
  if(!deleteFav) return
  const aux = { ...deleteFav };
  await deleteFav.destroy();
  return aux;
};

module.exports = deleteFavorites;
