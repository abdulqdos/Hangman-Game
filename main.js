// letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array Froms Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {
    // Create span
    let span = document.createElement("span");
    
    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);

    // append the letter to the span
    span.appendChild(theLetter);

    // Add Class
    span.className = "box-letter";

    //append span to the container
    lettersContainer.appendChild(span);
}

)

// Object Of Words + Categories

const words = {
    programing: ["r","js","go","cs","swift","for","my sql"],
    movies: ["aot","one","par site","vin lad","me anto","casto"],
    people: ["law","ahmed","abdo","sanji","alex","yousef"],
    countries: ["libya","egypt","syria","yeman","oman"],
}

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);

// Catgory
let randomPropertyName = allKeys[randomPropertyNumber];

// Catgory Words
let randomPropertyValue = words[randomPropertyName];

// Random Number Depend On Keys Words
let randomPropertyValueNumber = Math.floor(Math.random() * randomPropertyValue.length);

// Words
let randomVal = randomPropertyValue[randomPropertyValueNumber];

// Set Gategory Info

document.querySelector(".game-info .category span").innerHTML = randomPropertyName ;

// Select letter
let letterSelectGuess = document.querySelector(".letters-guess");

// Check space
let letterAndSpace = Array.from(randomVal);

// Set True Attempt
let trueAttempt = 0;

letterAndSpace.forEach(letter => {
    let emptyspan = document.createElement("span");
    if(letter === " ") {
        emptyspan.className = "with-space";
        trueAttempt ++; 
    }
    // Depnd span to the guess
    letterSelectGuess.appendChild(emptyspan);
})

// Select guess span
let theGuessSpan = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempt
let WrongAttempt = 0;



// SelectTheDraw
let theDraw = document.querySelector(".hangman-draw")


// Handl Clicking On Letters

document.addEventListener("click",(e) => {
    if(e.target.className === 'box-letter') {

        // add Class
        e.target.classList.add("clicked");

        // Set Status
        let theStatus = false ;

        // Get letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The Choosen Word
        theChoosenWord = Array.from(randomVal);

        // If The Clicked Letter Equal Of The Choosen Word
        theChoosenWord.forEach((wordLetter ,wordIndex) => {
            if(theClickedLetter === wordLetter){
                
                // Change The Status
                theStatus = true ;
                // Loop On All Spans
                theGuessSpan.forEach((span,spanIndex) => {
                    if(wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter ;
                    }
                })
            } 
        })
        // If Letter Is Wrong
        if ( theStatus !== true) {
            // increese The Wrong Attempt
            WrongAttempt++;
            
            // Add Class Wrong On The Draw Attempt
            theDraw.classList.add(`wrong-${WrongAttempt}`);

            // play Error Sound Effect
            document.getElementById("error").play();
        } else {
            trueAttempt++;
            // play Error Sound Effect
            document.getElementById("sucess").play();
        }
    }
    if(WrongAttempt === 8) {
        WrongAttempt++;
        lettersContainer.classList.add("finsh");
        document.getElementById("Fail").play();
        endGame();
    }
    if (trueAttempt === randomVal.length) {
        trueAttempt ++ ;
        WrongAttempt = 10;
        lettersContainer.classList.add("finsh");
        document.getElementById("complete").play();
        win();
    }
})


function endGame() {

    console.log(WrongAttempt);
    // end element
    let endele = document.querySelector(".end");
    // creete Element
    let div = document.createElement(`div`);

    // Creete Text Node
    let text = document.createTextNode(`Game Over , The Word Is ${randomVal} :)`);

    // append text to the div
    div.appendChild(text);

    // add Class Name
    div.className = "Game-over";

    // Append To The Body
    endele.appendChild(div);
}

function win() {
    // end element
    let endele = document.querySelector(".end");
    // creete Element
    let div = document.createElement(`div`);

    // Creete Text Node
    let text = document.createTextNode(`Winner Winner Dinner Checken :)`);

    // append text to the div
    div.appendChild(text);

    // add Class Name
    div.className = "winner";

    // Append To The Body
    endele.appendChild(div);
}