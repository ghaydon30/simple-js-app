// Create a repository variable to copy the pokemonList array (housed in an IIFE)
// Holding array in an IIFE protects it from unintended side effects
// funtions add and getAll will be in return to allow intentional access
let pokemonRepository = (function () {
  
  // Create a pokemonList array variable, housed in an IIFE to keep it unaccessable
  let pokemonList = [];
  
  //Variable set as the API url we will use for all the pokemon information
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  /* Function loadList returns fetch for the previously declared
  variable apiURL */ 
  function loadList() {
    // apiUrl passed into fetch, calls .then method which implies a promise
    // The result of the promise is the promise, a function passed response
    return fetch(apiUrl).then(function (response) {
      // response.json() converts the response to a json (all data in the URL)
      return response.json();
    }).then(function (json) {
      // json now represents all the data in the API
      // json.results refers to the "results" in the API itself
      // results in this case is the key, hence dot notation
      /* forEach function says for each item (which is each pokemon) 
      we create a variable pokemon which is mapped to an object, kets name and detailsURL
      the .name and .url come as keys from the items in the api */
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  // Local function that adds a pokemon object to the array variable pokemonList
  function add(pokemon) {
    // Checks if the pokemon parameter is an object, and if it has keys name and url
    // Keys come from objects in pokemonRepository
    // in is an operator that returns true if a specific property is in the specified object
    if (
      typeof pokemon === 'object' && 
      'name' in pokemon && 
      'detailsUrl' in pokemon
      ) {
        pokemonList.push(pokemon);
    } else {
      document.write('<p>' + 'Only a pokemon object can be added to this Pokemon List' + '</p>');
      alert('ALERT: Only a pokemon object can be added to the Pokemon List, there is currently an attempt to add an incorrect type to this list.');
    }
  }

  // Local function that returns the pokemonList array variable
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    /* Creates a variable pokePageList (node) that is assigned to the <ul></ul> tag 
    in our index.HTML file with class name .pokemon-list */
    let pokePageList = document.querySelector('.pokemon-list');
    
    // Creates a list item variable (node) for our <li></li> tag in index.HTML
    let listItem = document.createElement('li');

    // Creates a button variable (node) for our <button></button> tag in index.HTML
    let button = document.createElement('button');
    // Sets the button text to the pokemon's name
    button.innerText = pokemon.name;
    // Adds the class list-button to button for CSS styling access
    button.classList.add('list-button');

    // Add event listener for when the user clicks on a pokelist button
    // Calls the showDetails function as it's event handler getting passed the pokemon object
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    /* Append the button node to listItem, and listItem to pokePageList both 
    as their children */
    listItem.appendChild(button);
    pokePageList.appendChild(listItem)
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  // Return statement, allowing you to call add and getAll local functions
  // This allows global access to pokemonList that is otherwise impossible
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // pokemonRepository.getAll() calls getAll function in IIFE to copy pokemonList onto pokemonRepository
  // .forEach iterates through pokemonRepository and executes .addListItem function for each index
  // Function printPokemon passed parameter pokemon, which is an object at each index of pokemonRepository
  pokemonRepository.getAll().forEach(function printPokemon(pokemon) {
    // Calls function addListItem with parameter pokemon
    // This calls for the addition of a button list item to ul pokemon list
    pokemonRepository.addListItem(pokemon);
  });
});