# Dark Jokes Web Application

## Overview

This project is a simple web application that fetches dark jokes from an external API based on user input. It allows users to enter a search term and specify the number of jokes they want to retrieve. The application then displays the jokes on the webpage.

## Files

1. **index.html**: This file contains the HTML structure of the web page. It includes input fields for the search term and the number of jokes, a button to trigger the joke retrieval process, and a container to display the jokes.

2. **styles.css**: This file contains the CSS styles for the web page. It defines the layout, colors, and fonts used in the application.

3. **myscript.js**: This file contains the JavaScript code responsible for fetching jokes from the API based on user input and updating the webpage with the retrieved jokes.

## Usage

To use the application:

1. Open the `index.html` file in a web browser.
2. Enter a search term (optional) in the first input field. This term will be used to filter jokes containing the specified term.
3. Enter the number of jokes you want to retrieve in the second input field.
4. Click the "Find Jokes" button.
5. The application will fetch jokes from the API based on the entered criteria and display them on the webpage.

## Functionality

The JavaScript code in `myscript.js` handles the following scenarios:

- Fetching a single joke without a search term.
- Fetching a single joke with a search term.
- Fetching multiple jokes without a search term.
- Fetching multiple jokes with a search term.

The code dynamically updates the webpage with the retrieved jokes using DOM manipulation techniques.

## External Dependencies

This project relies on the JokeAPI (https://v2.jokeapi.dev/) to fetch jokes. It uses the `Any` category of jokes and supports filtering based on search terms.

## Notes

- Ensure an active internet connection to fetch jokes from the external API.
- The application may display jokes with dark or potentially offensive humor. User discretion is advised.
