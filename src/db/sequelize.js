const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const pokemons = require('./mock-pokemon')

const sequelize = new Sequelize('pokedex', 'root', 'Josephine01', {
  host: '127.0.0.1', port: 3306,
  dialect: 'mysql',

  logging: false
})


const Pokemon = PokemonModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({ force: true }).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types.join()
      }).then(pokemon => console.log(pokemon.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = {
  initDb, Pokemon
}