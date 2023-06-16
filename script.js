// script.js

// Constants
const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=4e111b64';

// Replace with your OMDB API key
const searchInput = document.getElementById('searchInput');
const searchResultsList = document.getElementById('searchResultsList');
const favouriteMoviesList = document.getElementById('favouriteMoviesList');

// Function to fetch search results from OMDB API
function searchMovies() {
  const searchTerm = searchInput.value;

  // Clear previous search results
  searchResultsList.innerHTML = '';

  // Make request to OMDB API
//   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
// HERE 4e111b64&s is the generated key by signing from email 
  fetch(`https://www.omdbapi.com/?apikey=4e111b64&s=${searchTerm}`)    
    .then(response => response.json())
    .then(data => {
      if (data.Search) {
        data.Search.forEach(movie => {
          const movieCard = createMovieCard(movie);
          searchResultsList.appendChild(movieCard);
        });
      }
    })
    .catch(error => console.log(error));
}

// Function to create a movie card for search results
function createMovieCard(movie) {
  const { Title, Year, imdbID, Poster } = movie;

  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = Title;

  const year = document.createElement('p');
  year.classList.add('card-text');
  year.textContent = Year;

  const favouriteButton = document.createElement('button');
  favouriteButton.classList.add('btn', 'btn-primary');
  favouriteButton.textContent = 'Add to Favourites';
  favouriteButton.addEventListener('click', () => addToFavourites(movie));

  cardBody.appendChild(title);
  cardBody.appendChild(year);
  cardBody.appendChild(favouriteButton);
  card.appendChild(cardBody);

  return card;
}

// Function to add a movie to favourites
function addToFavourites(movie) {
  const { Title, Year, imdbID } = movie;

  // Check if the movie is already in favourites
  const isAlreadyAdded = favouriteMoviesList.querySelector(`li[data-imdbid="${imdbID}"]`);
  if (isAlreadyAdded) {
    return;
  }

  const listItem = document.createElement('li');
  listItem.dataset.imdbid = imdbID;
  listItem.textContent = `${Title} (${Year})`;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove from Favourites';
  removeButton.addEventListener('click', () => removeFromFavourites(imdbID));

  listItem.appendChild(removeButton);
  favouriteMoviesList.appendChild(listItem);
}

// Function to remove a movie from favourites
function removeFromFavourites(imdbID) {
  const listItem = favouriteMoviesList.querySelector(`li[data-imdbid="${imdbID}"]`);
  if (listItem) {
    listItem.remove();
  }
}

// Event listener for search input
searchInput.addEventListener('input', searchMovies);
