'use strict';
const flight = 'LH234';
const jonas = {
  name: 'Jonas Sch',
  passport: 2342342934
};

const checkIn = function(flightNum, passenger){
  flightNum = 'LH949';
  passenger.name = 'Mr. ' + passenger.name;

  if (jonas.passport === 2342342934) {
    alert('Check in');
  }else{
    alert('Wrong passport!')
  }
}

// checkIn(flight, jonas);
// console.log(flight)
// console.log(jonas)
const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 10000000000);
}
// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(flight)
// console.log(jonas)

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transFormer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transFormer('Javascript is the best!', upperFirstWord);
transFormer('Javascript is the best!', oneWord);