/* 
Creates an array of objects for Pokemon with various attributes
uncluding name, height, and at least 2 types
*/
let pokemonList = [
  {name: 'Charizard', height: 1.7, eggGroups: ['Monster', 'Dragon']},
  {name: 'Blastoise', height: 1.6, eggGroups: ['Monster', 'Water 1']},
  {name: 'Machamp', height: 1.6, eggGroups: ['Human-Like', 'Guts']},
  {name: 'Jigglypuff', height: 0.5, eggGroups: ['Fairy', 'Friend']},
  {name: 'Snorlax', height: 2.1, eggGroups: ['Monster', 'Thick']}
]

/* 
For loop to print out all the Pokemon names and heights
If the height is at or over 2 meters, prints a note
Make note that paragraph elements were used for later formatting
*/
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 2.0) {
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' meters)' + ' - Wow, that\'s big!' + '</p>');
  } else {
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' meters)' + '</p>');
  }
}