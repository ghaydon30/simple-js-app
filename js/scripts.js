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

    6b: Create element node for a list item in pokemon-list

    6c: Create a button element for the document

    6d: Set button innerText to the pokemon's name with "name" key

    6e: Add class list-button to the newly created button

    6f: Add new button element to listChild and listItem to pokePageList with 
    appendChild (note that this is used with DOM elements)
    
    6g: Add an event listener for when the user clicks on the button, which will
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

    9a: Selects the modal container as DOM element

    9b: Clears existing modal content

    9c: Creates a div element with class modal for the modal itself

    9d: Add modal content by creating element, adding relevant classes, and info

    9e: Append modal DOM elements to modal element as children

    9f: Append modal to modal container as child

    9g: Make modal visible after adding contents by adding is-visible class

    9h: Event listener for clicking outside of container needs to be inside 
    showModal because this defines the box

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
    let pokePageList = document.querySelector('.pokemon-list');
    // 6b:
    let listItem = document.createElement('li');
    // 6c:
    let button = document.createElement('button');
    // 6d: 
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    // 6e: 
    button.classList.add('list-button');
    // 6f: 
    listItem.appendChild(button);
    pokePageList.appendChild(listItem)

    // 6g:
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  // 9:
  function showModal(item) {
    // 9a:
    let modalContainer = document.querySelector('#modal-container');
    // 9b:
    modalContainer.innerHTML = '';
    // 9c: 
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // 9d: 
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    let titleBase = item.name;
    let titleCap = titleBase.charAt(0).toUpperCase();
    let titleRest = titleBase.slice(1);
    titleElement.innerText = titleCap + titleRest;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + item.height;

    let imgCase = document.createElement('div');
    imgCase.classList.add('modal-img');
    let imgElement = document.createElement('img');
    imgElement.src = item.imageUrl;
    imgElement.width = '300';
    imgCase.appendChild(imgElement)

    // 9e: 
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgCase);
    // 9f: 
    modalContainer.appendChild(modal);

    // 9g: 
    modalContainer.classList.add('is-visible');

    // 9h: 
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    })
  }

  // 10:
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    // 10a: 
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
    }
  })

  // 11: Need explanation on this
  let dialogPromiseReject;

  function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');

      if (dialogPromiseReject) {
          dialogPromiseReject();
          dialogPromiseReject = null;
      }
  }
  
  // 7: 
  function showDetails(pokemon) {
    // 7a: 
    loadDetails(pokemon).then(function () {
      // console.log(pokemon);
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