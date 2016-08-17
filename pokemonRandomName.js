const Pokemons = require('./pokemonsArray.json')

module.exports = () => {
  let randomPokemon = (total) => (Math.random() * total | 0) + 1
  const RANDOM_POKEMON_INDEX = randomPokemon(Pokemons.length)
  console.log('RANDOM_POKEMON_INDEX', RANDOM_POKEMON_INDEX)
  return Pokemons[RANDOM_POKEMON_INDEX]
}