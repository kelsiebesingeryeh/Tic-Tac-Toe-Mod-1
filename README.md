# Tic-Tac-Toe

## Overview

Tic Tac Toe is a our final project for the Turing School of Software and Design. The purpose of the application is to create a game where two users can play Tic-Tac-Toe.

In Tic-Tac-Toe, there are two players (taxi cab and pizza) and each player can click on a box inside of the Tic-Tac-Toe grid and token appears on the screen. Once a player hits 3 in a row, the game is over and the player who won is identified and their count count goes up by one. Once the game is over, the board resets on a timer and the game starts over again. I used localStorage in order to keep the scores from disappearing on page refresh. The scores also are carried over from game to game unless a user clears their localStorage. If there is no winner, then the game is a draw and both users are notified that its a draw and win counts are not updated.

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

### Languages

This project was written using HTML, CSS, and JavaScript

### Author

[Kelsie Besinger Yeh](https://github.com/kelsiebesingeryeh)

### Special Thanks

Mentor code review with Hilary Lewis and Rock support/guidance from Bailey Dunning.
