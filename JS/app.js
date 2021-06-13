'use strict';

let userScore = 0;

let userName = prompt('please enter your name');
document.getElementById('user').innerHTML = 'hello ' + userName + '!, welcome to my website.';


function guissingGame (userInput)
{
  if (userInput==='y'|| userInput==='y'){
    alert('you are correct :)');
    userScore++;
  }else if (userInput==='no' || userInput==='n'){
    alert('you are mistaken :(');
  }else {alert('please enter (yes) or (y) or (no) or (n)');}
}
let vacation=prompt('would i like to go on a vacation any time soon?').toLocaleLowerCase();
guissingGame(vacation);

let bachDegr =prompt("m i a bachelor's degree holder?").toLocaleLowerCase();
guissingGame(bachDegr);

let mangoSmoothie=prompt("do i keep unnecessarily bying games i'll never play on every steam sales season?").toLocaleLowerCase();
guissingGame(mangoSmoothie);

let nightRide=prompt('do i like going on night rides?').toLocaleLowerCase();
guissingGame(nightRide);

function guissingGameWrong (userInput2)
{
  if (userInput2==='y'|| userInput2==='y'){
    alert('you are mistakent :(');
  }else if (userInput2==='no' || userInput2==='n'){
    alert('you are correct :)');
    userScore++;
  }else {alert('please enter (yes) or (y) or (no) or (n)');}
}
let residence=prompt('do i live in london?').toLocaleLowerCase();
guissingGameWrong(residence);





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

let favFruits=['mango', 'strawberry', 'orange','cherry','melon'];
var ff=prompt('guess one of my favorite fruits!')
for(let f=0; f<5; f++){
  if (ff===favFruits[0] || ff===favFruits[1] || ff===favFruits[2] || ff===favFruits[3] || ff===favFruits[4]){
    alert('you are correct!');
    userScore++;
    break;
  }else{var ff=prompt('incorrect!, please try again');
  }
}
alert(`may favorite fruets are ${favFruits}`)

document.getElementById('score').innerHTML ='your final score is ' +userScore+ ' out of 7';
