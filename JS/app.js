'use strict';

let userScore = 0;

let userName = prompt('please enter your name');
document.getElementById('user').innerHTML = 'hello ' + userName + '!, welcome to my website.';


// let vacation = prompt('would i like to go on a vacation any time soon?').toLowerCase();
// if (vacation === 'yes' || vacation === 'y') {
//   //console.log('you are correct')
//   alert('you are correct');
//   userScore++;
// } else if (vacation === 'no' || vacation === 'n') {
//   // console.log('you are mistaken :)')
// } else {
//   alert('please enter (yes) or (y) or (no) (n)!');
// }

// let bachDegr = prompt("am i a bachelor's degree holder?").toLowerCase();
// if (bachDegr === 'yes' || bachDegr === 'y') {
//   //console.log('you are correct')
//   alert('you are correct');
//   userScore++;
// } else if (bachDegr === 'no' || bachDegr === 'n') {
//   // console.log('you are mistaken :)')
// } else {
//   alert('please enter (yes) or (y) or (no) (n)!');
// }
// let residence = prompt('do i live in london?').toLowerCase();
// if (residence === 'yes' || residence === 'y') {
//   //console.log('you are mistaken')
//   alert('you are mistaken');
// } else if (residence === 'no' || residence === 'n') {
//   // console.log('you are correct :)')
//   alert('you are correct');
//   userScore++;
// } else {
//   alert('please enter (yes) or (y) or (no) (n)!');
// }

// let mangoSmoothie = prompt("do i keep unnecessarily bying games i'll never play on every steam sales season?").toLowerCase();
// if (mangoSmoothie === 'yes' || mangoSmoothie === 'y') {
//   //console.log('you are correct')
//   alert('you are correct');
//   userScore++;
// } else if (mangoSmoothie === 'no' || mangoSmoothie === 'n') {
//   // console.log('you are mistaken :)')
// } else {
//   alert('please enter (yes) or (y) or (no) (n)!');
// }
// let nightRide = prompt('do i like going on night rides?').toLowerCase();
// if (nightRide === 'yes' || nightRide === 'y') {
//   //console.log('you are correct')
//   alert('you are correct');
//   userScore++;
// } else if (nightRide === 'no' || nightRide === 'n') {
//   // console.log('you are mistaken :)')
// } else {
//   alert('please enter (yes) or (y) or (no) (n)!');
// }

function guissingGame (userInput)
{
  if (userInput=='y'|| userInput=='y'){
    alert('you are correct :)');
    userScore++;
  }else if (userInput=='no' || userInput=='n'){
    alert('you are mistaken :(')
  }else {alert('please enter (yes) or (y) or (no) or (n)')}
}
let vacation=prompt('would i like to go on a vacation any time soon?').toLocaleLowerCase();
guissingGame(vacation);

let bachDegr =prompt("m i a bachelor's degree holder?").toLocaleLowerCase();
guissingGame(bachDegr);

let residence=prompt('do i live in london?').toLocaleLowerCase();
guissingGame(residence);

let mangoSmoothie=prompt("do i keep unnecessarily bying games i'll never play on every steam sales season?").toLocaleLowerCase();
guissingGame(mangoSmoothie);

let nightRide=prompt('do i like going on night rides?').toLocaleLowerCase();
guissingGame(nightRide);




var myHeight = prompt('guess how tall i am in centimeter!');
let x = 0;

while ( x < 3) {
  if (myHeight == 180) {
    alert('correct');
    userScore++;
    break;
  } else if (myHeight > 180) {
    var myHeight = prompt('too high!, try again');
    x++;
    if (x===3){alert('i am 180 centemeters high');}

  } else if (myHeight < 180) {
    var myHeight = prompt('too low! try again')
    x++;
    if (x===3){alert('i am 180 centemeters high');}

  } else {
    var myHeight = prompt('please enter a number');
  }
}

let favFruits=['mango', 'strawberry', 'orange','cherry','melon']
var ff=prompt('guess one of my favorite fruits!')
for(let f=0; f<6; f++){
  if (ff===favFruits[0] || ff===favFruits[1] || ff===favFruits[2] || ff===favFruits[3] || ff===favFruits[4]){
    alert('you are correct!');
    userScore++;
    break;
  }else{var ff=prompt('incorrect!, please try again');
  }
}

document.getElementById('score').innerHTML ='your final score is ' +userScore+ ' out of 7';
