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

/* A test to make sure the array and objects are working
This will print the 4th pokemon's name and it's first type */
//document.write(pokemonList[3].name+' '+pokemonList[3].types[0].name);

/* For loop to print all array items of pokemonList (name and height) 
 Also printing a conditional if the height is over 2.0 meters*/
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' meters)');
  if (pokemonList[i].height >= 2.0) {
    document.write(' - Wow, that\'s big!<br>');
  } else {
    document.write('<br>');
  }
}