**REVISITING rock-paper-scissor**

Task:

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
- For now, remove the logic that plays exactly five rounds.
- Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is 
  clicked. (you can keep the console.logs for this step)
- Add a div for displaying results and change all of your console.logs into DOM methods.
- Display the running score, and announce a winner of the game once one player reaches 5 points.
- You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

------------------------------------------------------

***Last README rock-paper-scissor***
In this project we are going to code a simple rock-paper-scissor game that you can play with the computer

------------------------------------------------------

Pseudocode:
Get the input from the user (can be rock, paper or scissor)
Save Input in a variable 
Get Input from Computer (can be rock, paper or scissor)

Take the user input and the computer input
If the scenario(User: Stone - PC:Scissor) = Won
If the scenario(User: Scissor - PC:Paper) = Won
If the scenario(User: Paper - PC:Stone) = Won
If both get the same item = Tie
Otherwise = Lost

In the function game() we play 5 round with a loop
After 5 rounds the function sees who has more score and declares the winner

------------------------------------------------------

What I have learnt:
- Loops
- How to correctly use return
- When to use const variables
- How to write Pseudocode
- How to comment on the project

------------------------------------------------------