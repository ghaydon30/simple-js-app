/* 
FUNCTIONALITY OVERVIEW
  1: pokemonRepository is an IIFE which houses global variables and protects
  them from unwanted consequences 

    1a: Create a pokemonList array variable, housed in an IIFE to keep it unaccessible

    1b: Create a apiUrl variable to house the URL of the general pokemon API

    1c: return statement returns all included functions, allowing access to IIFE

  2: pokemonRepository.loadList becomes a promise due to .then following
  loadList() is used to fetch data from the API, then add each Pokémon in 
  the fetched data to pokemonList with the add function

    2a: .getAll() function returns pokemonList (essentially copying to repo)

    2b: .forEach iterates through pokemonRepository applying printPokemon with 
    parameter pokemon

    2c: printPokemon then calls .addListItem (see 6) with parameter pokemon 
    which adds each pokemon as a button to the page

  3: loadList() uses two promises to 

    3a: returns fetch getting all data from the pokeAPI URL (promise response), 
    .then gets passed the promise response, which on fulfilled calls a function 
    with parameter "response"

    3b: return of 3a function is response.json() converting all fetched response
    information into json format

    3c: Following 3b, second .then implies json data is passed as promise response
    Dot notation is used to access the "results" key in the API (holds pokemon name & URL)
    forEach now called to iterate through results passed each result as item

    3d: Create pokemon object with name and detailsURL loaded with item. notation

    3e: Calls add() passing newly created pokemon object (see 4)

    3f: catch in case any of the promises previously are not fulfilled
  
  4: Function that checks pokemon object keys & adds pokemon 
  to the array pokemonList

    4a: If statement to check if parameter passed to add() is a proper pokemon
    Checks if pokemon is an object, and if the two keys are correct strings 

    4b: pokemon.push appends the vetted pokemon object to array pokemonList

  5: getAll() is a local function that returns the pokemonList array variable, 
  thus copying it to pokemonRepository

  6: addListItem is passed parameter pokemon with purpose to add a button with
  the pokemon name, used to list all pokemon when called by forEach loop

    6a: Create pokePageList node with query selector for pokemon-list class in HTML

    6b: Create a button element for the document

    6c: Set button innerText to the pokemon's name with "name" key

    6d: Add necessary classes and types for button to call the Bootstrap Modal

    6e: Add new button element to pokePageList with appendChild 
    (note that this is used with DOM elements)
    
    6f: Add an event listener for when the user clicks on the button, which will
    prompt call of showDetails as event handler and pass parameter "pokemon" object, 
    goal to show pokemon details in console upon click

  7: showDetails() function passed parameter pokemon, prompts calling promise 
  loadDetails for pokemon

    7a: If loadDetails promise resolves, callback function calls hideModal (see 9)

  8: LoadDetails takes an item as a parameter (which is pokemon from showDetails)

    8a: create url variable for details api using the detailsUrl key in the object

    8b: Fetch and return the data from the url, then pass it as "response"

    8c: Next return response.json, converting JSON response into object

    8d: use .then to pass object as details

    8e: Add to item object keys for imageUrl, height, and types referring to 
    API object keys from details object, item passed to showDetails now with info

    8f: Catch with error function in case promise does not achieve valid response

  9: Function showModal to display a modal of the pokemon information

    9a: Uses JQuery to create select body and title of HTML modal element
    clears both of these from the previous modal avoiding duplicates

    9b: Create contents for modal title, image, height, and types elements

    9c: Add all previous elements to the modal with .append 
    (note Bootstrap modal is used)

  10: Functionality to close modal when escape key is pressed

    10a: Checks if the event's key is 'Escape' and if modal container 
    is currently visible

  11: Need explanation on this

*/


// 1:
let pokemonRepository = (function () {
  
  // 1a:
  let pokemonList = [];
  
  // 1b:
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // 3:
  function loadList() {
    // 3a:
    return fetch(apiUrl).then(function (response) {
      // 3b:
      return response.json();
    }).then(function (json) {
      // 3c:
      json.results.forEach(function (item) {
        // 3d:
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        // 3e:
        add(pokemon);
      });
    // 3f: 
    }).catch(function (e) {
      console.error(e);
    })
  }

  // 8: 
  function loadDetails(item) {
    // 8a: 
    let url = item.detailsUrl;
    // 8b:
    return fetch(url).then(function (response) {
      // 8c:
      return response.json();
      // 8d:
    }).then(function (details) {
      // 8e: 
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      // 8f:
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  // 4: 
  function add(pokemon) {
    
    // 4a:
    if (
      typeof pokemon === 'object' && 
      'name' in pokemon && 
      'detailsUrl' in pokemon
      ) {
        // 4b: 
        pokemonList.push(pokemon);
    } else {
      document.write('<p>' + 'Only a pokemon object can be added to this Pokemon List' + '</p>');
      alert('ALERT: Only a pokemon object can be added to the Pokemon List, there is currently an attempt to add an incorrect type to this list.');
    }
  }

  // 5:
  function getAll() {
    return pokemonList;
  }

  // 6:
  function addListItem(pokemon) {
    // 6a:
    let pokePageList = document.querySelector('.list-group');
    // 6b:
    let button = document.createElement('button');
    // 6c: 
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    // 6d: 
    button.classList.add('btn', 'btn-primary', 'btn-block', 'btn-lg');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokeModal');
    // 6e: 
    pokePageList.appendChild(button);

    // 6f:
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  // 9:
  function showModal(item) {

    // 9a:
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    // 9b: 
    let titleBase = item.name;
    let titleCap = titleBase.charAt(0).toUpperCase();
    let titleRest = titleBase.slice(1);
    let titleElement = $('<h1>' + titleCap + titleRest + '</h1>');
    let imgElement = $('<img style="width:50%">');
    imgElement.attr('src', item.imageUrl);

    let heightElement = $('<p>' + 'Height: ' + item.height + '</p>');

    let typesString = item.types.map(type => type.type.name);
    typesString = typesString.join(', ');
    let typesElement = $('<p>' + 'Types: ' + typesString + '</p>');

    // 9c: 
    modalTitle.append(titleElement);
    modalBody.append(imgElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
  }
  
  // 7: 
  function showDetails(pokemon) {
    // 7a: 
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // 1c:
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// 2:
pokemonRepository.loadList().then(function() {
  // 2a:
  // 2b:
  pokemonRepository.getAll().forEach(function printPokemon(pokemon) {
    // 2c:
    pokemonRepository.addListItem(pokemon);
  });
});

/* 
QUESTIONS

  1: What is the purpose of the newly defined function in the forEach that calls
  addListItem? Why can I not just add pokemonRepository.addListItem(pokemon)
  into the forEach loop?

  2: How does part 11 actually work and why is it needed?
*/