# Tic-Tac-Toe

## Table of Contents

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Using the App](#using-the-app)
* [Code Architecture](#code-architecture)
* [Languages](#languages)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## Overview

Tic Tac Toe is a our final project for the Turing School of Software and Design. The purpose of the application is to create a game where two users can play Tic-Tac-Toe.

In Tic-Tac-Toe, there are two players (taxi cab and pizza) and each player can click on a box inside of the Tic-Tac-Toe grid and token appears on the screen. Once a player hits 3 in a row, the game is over and the player who won is identified and their win count goes up by one. Once the game is over, the board resets on a timer and the game starts over again. I used localStorage in order to keep the scores from disappearing on page refresh. The scores also are carried over from game to game unless a user clears their localStorage. If there is no winner, then the game is a draw and both users are notified that its a draw and win counts are not updated.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html).

## Prerequisites

There are no prerequisite programs or tools needed. This app runs in a browser and does not require downloads. Both player 1 and player 2 win scores are stored within their browser so win counts persist on page refresh.

### Using the App

Here is a quick video on how the game works.

[![Tic-Tac-Toe Demo](https://media.giphy.com/media/8OdMsIroT9ceHMZq21/giphy.gif)


[![Tic-Tac-Toe Main](https://i.imgur.com/ry11gcp.png)

* The game defaults to player 1 going first.  
* Once player 1 clicks on a box, the taxi icon appears. Player 2 then goes and a pizza icon appears.
* The game continues until either player 1 or player 2 gets three in a row according to our "win conditions".
* If neither player 1 or player 2 wins, then the game is a draw.
* The game then resets once the game is over and a new game is started. Win scores for both player 1 and 2 persist throughout the games and on refresh.

### Code Architecture

* **Main.js**
  * The main.js file is primarily used to manipulate the DOM using methods that were created inside of the Game class. By instantiating the new instance of Game inside of this file, I am able to access the "logic" methods that live in the data model and am able to use the data model to manipulate the DOM to show how the game is being played.
  * I used the main.js file strictly for DOM manipulation in order to make sure I am separating the DOM from the data model. I did not want to cross-pollinate those files. The DOM is only showing what my data model is telling it to do.

* **Player.js**
  * The player.js file creates a "Player" class along with a constructor containing its properties that is used when both players are instantiated, creating new instances of the Player class. There are no methods in this class, only properties inside of our objects that get created in the Game file.
  * I used the player file in order to create a "Player" class that would be completly separate from the DOM and also the Game file. Players have different properties, so its best practice to keep it separate from Game.


* **Game.js**
  * The game.js file is the "brains" behind the game that contains all the logic on the back-end. The game file also creates a "class" of Game along with a constructor and properties for the game. There are several methods inside of the class that are used to "play the game" and those methods are called when I instantiate a new instance of the class Game inside of the main.js file and I use those methods in various DOM manipulation. 
  * I used the game.js file to create the data model in order to track the behaviors of the game on the front end. I wanted to separate the data model from the DOM to make sure there was only one source of truth in this app. 

### Languages

This project was written using HTML, CSS, and JavaScript

### Contact

[Kelsie Besinger Yeh](https://github.com/kelsiebesingeryeh)

### Acknowledgements

Mentor code review with Hilary Lewis and Rock support/guidance from Bailey Dunning.
