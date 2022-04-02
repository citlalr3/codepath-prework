# Pre-work - *Memory Game*

Simon: Revived is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Citlali Rodriguez

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/discovered-outgoing-caraway?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] "Hard Mode" implemented, in which the game continues until the player makes a wrong guess on their turn

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Game Lost:
![gameLost](https://cdn.glitch.global/9dacf4b0-940b-4603-a434-449f77c31f64/lose.gif?v=1648878778810)
Game Won:
![gameWon](https://cdn.glitch.global/9dacf4b0-940b-4603-a434-449f77c31f64/win.gif?v=1648879020487)
Hard Mode Goes Beyond Pattern of Length Ten:
![hardModeBeyondLengthTen](https://cdn.glitch.global/9dacf4b0-940b-4603-a434-449f77c31f64/hardModeBeyondLenTen.gif?v=1648879571502)
Hard Mode Generates Different Patterns for Each Game:
![hardModeGeneratesDifferentPatterns](https://cdn.glitch.global/9dacf4b0-940b-4603-a434-449f77c31f64/hardModeGeneratesDifferentPatterns.gif?v=1648879722539)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    1) https://www.w3schools.com/jsref/jsref_length_array.asp
 ---used to get length of array
 
    2) https://www.w3schools.com/js/js_random.asp
 ---used to get familiarized with JavaScript's Math.random()
 
    3) https://www.w3schools.com/js/js_arrays.asp 
 --used to append to array
 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  One challenge that I came across when creating this submission was the implementation of “hard mode”.  
Hard mode is a playing style that I added to the game in which the user keeps guessing a seemingly infinite,
random pattern until they make a mistake.  The idea for this mode came from my memories as a kid playing an
online version of Simon.  While testing the original version of this project I found that guessing a predetermined
pattern of length ten became dull after a few consecutive plays and finally decided to challenge myself to add something
similar to the Simon game I played when I was younger.

  The first challenge came from figuring out how to implement this idea.  I started by noting two main changes that would
have to be made in order to generate an “infinite”, random pattern.  I first focused on generating random numbers to
use for the sequence since one of the optional features for this project also involved a random pattern.  I read through
what was provided for this optional feature and found Math.random() was used.  I performed more internet research on the
usage of Math.random() before adding it to my code.  I then created a small function that would generate a random number
from one through four and output it to the console to ensure it worked.  I then focused on increasing the size of the
pattern, which I figured required increasing the size of the array that held that pattern.  This led me to investigate
how arrays work in JavaScript.  I looked into whether arrays were dynamic or static objects and what methods they possessed.
I found that adding an object into an array is possible by using the .push() method.  I decided to group these two parts
into a single function that would add a random number to the pattern array.

  The second challenge was figuring out the logic.  I initially thought the best place to call this function would be in
playClueSequence(), which worked until the game mode was switched back to “easy”.  This posed a problem because the pattern
array would have to be reset depending on how you wanted to play.  This is where I decided to implement two modes, which
would reset the pattern array to an empty array if “hard” was chosen or a predetermined array of length ten otherwise.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  Small programs similar to my submission are suitable for individuals to work on, but I realized that there are
projects that would be better handled and produced by a team.  Bigger, more complex projects, such as websites,
would probably be better developed by a team rather than an individual.  When such large teams become involved,
I wonder how the work is distributed across these teams and how they collaborate to reach their goal.

  Another question of interest that formed while working on my project was that of designing the user interface.
Choosing the right colors, sounds, and fonts for web projects is essential to creating an engaging, trustworthy
product.  Navigating the applications should also be intuitive for users.  Making these styling decisions is a
struggle for me, and I would like to learn how these choices are made in order to better guide my own.

  Additionally, I am interested in the process of distributing the finished projects. I know websites are hosted
on servers, but I would like to know the process of uploading that website onto that server and providing maintenance
to that website once it has already been distributed to users.  For example, if I wanted to publish my game onto the
web I would need to know how to upload it to a server and how to keep it running properly and securely for users. I am
also interested in learning about other methods for distributing projects.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  Given a few more hours to work on this project, I would add the ability to keep track of the player’s current score
during the game as well as their high score.  This would give the player a gauge as to how well they did and adds a
competitive element to the game.  Each time the player guesses the correct sequence on their turn, the current score
would increase by one and be displayed to the player.  The highest score would be the largest number of correct
sequences the player can guess in a single game.  The highest score would also need to be updated at the end of the game
if the player was able to exceed the high score that was previously held.

  With a few more hours, I would also make it so that each time the game is played a different pattern is used.  Currently,
only a different pattern is generated each time the game is played in hard mode (and in this mode, there is no set pattern
size, which is to say the game continues until the player makes an incorrect guess); however, I would have liked to add the
ability to generate a random pattern of length ten for each game that is played in easy mode.  This would be an improvement
to the game because it keeps the player engaged in a challenge.  As the game currently stands, the player is likely able to
memorize the pattern after a certain amount of attempts.




## Interview Recording URL Link

https://uci.zoom.us/rec/share/tMAD8KhWU6a9Sgcg1LVQidm3C_KJoOup_ihQU4_-R6nFax59m17yswQZISCf_iy5.M97M9jKj6QLOAyFZ

## License

    Copyright Citlali Rodriguez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
