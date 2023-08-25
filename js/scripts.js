// Create a repository variable to copy the pokemonList array (housed in an IIFE)
// Holding array in an IIFE protects it from unintended side effects
// funtions add and getAll will be in return to allow intentional access
let pokemonRepository = (function () {
  // Create a pokemonList array variable, housed in an IIFE to keep it unaccessable
  let pokemonList = [
    {name: 'Charizard', height: 1.7, eggGroups: ['Monster', 'Dragon']},
    {name: 'Blastoise', height: 1.6, eggGroups: ['Monster', 'Water 1']},
    {name: 'Machamp', height: 1.6, eggGroups: ['Human-Like', 'Guts']},
    {name: 'Jigglypuff', height: 0.5, eggGroups: ['Fairy', 'Friend']},
    {name: 'Snorlax', height: 2.1, eggGroups: ['Monster', 'Thick']}
  ];

  // Local function that adds a pokemon object to the array variable pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Local function that returns the pokemonList array variable
  function getAll() {
    return pokemonList;
  }

  // Return statement, allowing you to call add and getAll local functions
  // This allows global access to pokemonList that is otherwise impossible
  return {
    add: add,
    getAll: getAll
  };
})();

// pokemonRepository.getAll() calls getAll function in IIFE to copy pokemonList onto pokemonRepository
// .forEach iterates through pokemonRepository and executes printPokemon function for each index
// Function printPokemon passed parameter pokemon, which is an object at each index of pokemonRepository
// printPokemon function then evaluates each object and prints keys name and height, along with a message
pokemonRepository.getAll().forEach(function printPokemon(pokemon) {
  // Checks if pokemon height is over 2 meters
  if (pokemon.height >= 2.0) {
    // Writes to document as a paragraph element the name, height, and a message about the pokemon object
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ' meters)' + ' - Wow, that\'s big!' + '</p>');
  } else {
    // Writes to document as a paragraph element the name and height of the pokemon object
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ' meters)' + '</p>');
  }
});