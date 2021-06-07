'use strict';

let userName=prompt('please enter your name');
document.getElementById('user').innerHTML='hello ' +userName+ '!, welcome to my website.';

let vacation=prompt('would i like to go on a vacation any time soon?').toLowerCase();
if(vacation==='yes' || vacation==='y'){
  //console.log('you are correct')
  alert('you are correct');
} else if(vacation==='no' || vacation==='n'){
  // console.log('you are mistaken :)')
} else {
  alert('please enter (yes) or (y) or (no) (n)!');
}

let hunger=prompt('am i hungry?').toLowerCase();
if(hunger==='yes' || hunger==='y'){
  //console.log('you are correct')
  alert('you are correct');
} else if(hunger==='no' || hunger==='n'){
  // console.log('you are mistaken :)')
} else {
  alert('please enter (yes) or (y) or (no) (n)!');
}
let thirst=prompt('am i thirsty?').toLowerCase();
if(thirst==='yes' || thirst==='y'){
//console.log('you are correct')
  alert('you are correct');
} else if(thirst==='no' || thirst==='n'){
// console.log('you are mistaken :)')
} else {
  alert('please enter (yes) or (y) or (no) (n)!');
}

let mangoSmoothie=prompt('would i like a glass of cold mango smoothie?').toLowerCase();
if(mangoSmoothie==='yes' || mangoSmoothie==='y')
{
//console.log('you are correct')
  alert('you are correct');
} else if(mangoSmoothie==='no' || mangoSmoothie==='n')
{
// console.log('you are mistaken :)')
} else {
  alert('please enter (yes) or (y) or (no) (n)!');
}
let nightRide=prompt('do i like going on night rides?').toLowerCase();
if(nightRide==='yes' || nightRide==='y'){
//console.log('you are correct')
  alert('you are correct');
} else if(nightRide==='no' || nightRide==='n'){
  // console.log('you are mistaken :)')
} else {
  alert('please enter (yes) or (y) or (no) (n)!');
}

