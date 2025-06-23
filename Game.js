console.log('Game');
let clue1 = 'Ahmed';
let clue2 = 'Ali';
let clue3 = 'mohamed';
let clue = '';
let attemp = true;

console.log('Choose clue (Ahmed, Ali, mohamed):');

while (attemp == true) {
    clue = prompt("Enter your guess(Ahmed,Ali,Mohamed):"); 
    console.log(clue);
    if (clue == clue1) {
        console.log('Ahmed is the correct answer');
    } else if (clue == clue2) {
        console.log('Ali is the wrong answer');
    } else if(clue==clue3) {
        console.log('Mohamed is the wrong answer');
    }
    else{
              console.log('not valid');
    }
    attemp++
}
