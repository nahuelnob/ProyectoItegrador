require("dotenv").config()
const { Sequelize } = require("sequelize");
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}/rickandmorty`,
  { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const {Favorite, User} = sequelize.models

Favorite.belongsToMany(User, {through: 'User_Favorite'})
User.belongsToMany(Favorite, {through: 'User_Favorite'})

module.exports = {
    ...sequelize.models,
    conn: sequelize,
 };