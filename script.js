//Outside references used:
//https://www.w3schools.com/jsref/jsref_length_array.asp
// ---used to get length of array
//https://www.w3schools.com/js/js_random.asp
// ---used to get familiarized with JavaScript's Math.random()

// global constants
// const clueHoldTime = 1000; //how long to hold each clue's light/sound (original requirement)
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var guessCounter = 0;
var gamePlaying = false;
var clueHoldTime = 1000;  //made var to speed up game and make it more challenging (optional modification)
var hardMode = false;

//sound global variables
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}


function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  if(hardMode)
    {
      pattern = [];
    }
  clueHoldTime = 1000;
}


function survival()
{
  hardMode = true;
  pattern = [];
  document.getElementById("hardModeBtn").classList.add("hidden");
  document.getElementById("easyModeBtn").classList.remove("hidden");
}

function regular()
{
  hardMode = false;
  pattern = [2, 2, 4, 3, 2, 1, 2, 4];
  document.getElementById("hardModeBtn").classList.remove("hidden");
  document.getElementById("easyModeBtn").classList.add("hidden");
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}


function playClueSequence(){
  context.resume()
  guessCounter = 0;
  
  if(hardMode)
  {
    patAppend();
  }
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  //time decrease (optional)
  //Note: clueHoldTime is never less than 100, making it possible and reasoable to enjoy the game at
  //      high speeds
  if(clueHoldTime > 100)
  {
    clueHoldTime -= 50;
    console.log("Current wait time:" + clueHoldTime);
  }
}


// Add a random button number to the existing pattern
function patAppend()
{
  var nextNum = Math.floor(Math.random() * 4) + 1;
  pattern.push(nextNum);
}


//Game logic
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("You Won!");
}


function guess(btn){
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter])
    {
      if(guessCounter == progress)
        {
          if((guessCounter == pattern.length - 1) && (hardMode == false))
            {
              winGame();
            }
          else
            {
              progress++;
              playClueSequence();
              //curr_bttn = 0;
            }
        }
      else
        {
          //curr_bttn++;
          guessCounter++;
        }
    }
  else
    {
      loseGame();
    }
}


//functions for lighting/clearing buttons
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


// Sound Synthesis Functions
const freqMap = {
  // 1: 261.6,
  // 2: 329.6,
  // 3: 392,
  //4: 466.2
  1: 290,
  2: 330,
  3: 438,
  4: 515
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
