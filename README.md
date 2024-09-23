# Board Game Rental Simulator

## Description
AluGames is a board game rental simulator developed with HTML, CSS and JavaScript. It allows users to browse a list of games, rent and return titles, viewing the status of each one. It was developed as study activities at Alura.

## Functionalities
Game List: Displays the games available for rent, with images and names.
Rent and Return: Users can rent games by clicking a button. The button changes from "Rent" to "Return" and vice versa, indicating the status of the game. An overlay is applied to the image of the rented game to indicate unavailability.
Rent Games Counter: A discrete counter (registered in the browser console) displays the total number of games currently rented.

## Technologies Used
HTML: Page structure.
CSS: Page styling, including layout, colors and visual elements.
JavaScript: User interaction logic, such as manipulating classes to change game status and updating button text.

## How to Use
Clone the repository: git clone https://[your_repository]
Open the index.html file: Open the index.html file in your browser.
Click "Rent" for a game: The button will change to "Return", indicating that the game has been rented. An overlay will be applied to the game image.
Click "Return" for a rented game: The button will change to "Rent", indicating that the game has been returned. The overlay will be removed from the game image.

## File Structure
index.html: Main page file.
css/main.css: CSS style file.
js/app.js: JavaScript file with the application logic.
img/: Folder containing game images and other visual elements. _reset.css (optional): CSS stylesheet file (if you are using it).

## Future Improvements
Data Persistence: Store the status of rented games (locally or in a database) so that the information is preserved when the browser is closed.
Rental Limit: Implement a login system for users and set a limit on the number of games that each user can rent at a time.
Real-Time Availability: Connect to a database to display the actual availability of games in real time.
Game Search: Implement a search bar so that users can find games by name.

## Notes
Basic Functionality: This project demonstrates the basics of user interaction and DOM manipulation with JavaScript.
Customization: You can easily customize the look and feel of the rental store by editing the CSS styles.
Code Extension: This example is simple, but can be expanded to include functionality such as those suggested in "Future Improvements".

## Contributions
Contributions are welcome! If you find any bugs or have any suggestions for improvements, please open an issue or make a pull request.

**Ernane Nunes**
**ernanenn@gmail.com**
