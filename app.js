// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(userGuess, correctSpot) {
    
    // reset the styles
    shedContainer.classList.remove('reveal')
    treeContainer.classList.remove('reveal')
    boulderContainer.classList.remove('reveal')

    totalGuesses++;

    totalEl.textContent = totalGuesses;


    Counter.hidingPlaces.textContent=hidingSpot;

    if(userGuess === correctSpot) {
        correctGuesses++;
        winsEl.textContent = correctGuesses;
        
    
        if (correctSpot === 'shed') {
            shedContainer.classList.add('smile');
        } 

        }   else if (correctSpot === 'tree') 
                treeContainer.classList.add('smile');

         
         }  else if  (correctSpot === 'boulder')
                boulderContainer.classList.add('smile'); 
    
        } else {
                 lossesE1.textContent = totalGuesses - correctGuesses;
            }
        
  

   
    
    // then increment the guesses
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
