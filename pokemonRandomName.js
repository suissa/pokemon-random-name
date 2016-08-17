const Pokemons = require('./pokemonsArray.json')

module.exports = () => {
  let randomPokemon = (total) => (Math.random() * total | 0) + 1
  return Pokemons[randomPokemon(Pokemons.length)]
}