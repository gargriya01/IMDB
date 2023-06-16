The project is a mini IMDB clone app that allows users to search for movies using the OMDB API (Open Movie Database) and interact with the search results. The app is built using vanilla JavaScript, HTML, and CSS.

Key Features:

Home Page: The home page provides a search input field where users can enter the name of a movie they want to search for. As the user types, the search results are displayed dynamically, similar to Google's search suggestions. The search results are retrieved from the OMDB API.

Search Results: The search results are shown as movie cards, each displaying the movie title and year. Each movie card also includes an "Add to Favourites" button. Clicking on this button adds the movie to the user's list of favourite movies.

Movie Page: Clicking on a search result card opens a new page dedicated to that particular movie. The movie page displays detailed information about the movie, such as its title, poster image, plot, and other available data obtained from the OMDB API.

Favourite Movies Page: The app includes a separate page that displays the user's list of favourite movies. This list is persistent, meaning it retains the same set of movies even after closing or refreshing the browser. Each movie in the list is accompanied by a "Remove from Favourites" button, allowing the user to remove movies from their favourites.

How it Works:

The app uses the OMDB API to fetch movie data based on user searches. The API is accessed via HTTP requests, and the responses are processed and displayed on the frontend.
The JavaScript code handles the user interactions, such as typing in the search input, adding movies to favourites, and removing movies from favourites. It also dynamically updates the UI with search results and favourite movies.
The HTML markup structures the different sections of the app, such as the search input, search results, favourite movies list, and movie page.
The CSS styles the app, providing visual aesthetics and layout for a better user experience.
Overall, this mini IMDB clone app provides users with the ability to search for movies, view movie details, add movies to favourites, and manage their favourite movies list. It showcases the use of the OMDB API and demonstrates how to handle API requests, process responses, and update the UI dynamically using vanilla JavaScript.
