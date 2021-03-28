'use strict';

// const bookings = [];

// //ES6 method
// const createBooking = function(flightNum, numPassengers = 200, price = 250 * numPassengers) {
//   // ES5 method
//   // numPassengers = numPassengers || 10
//   // price = price || 200

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 150, 1000);
// //The number can be changed within the original function statement/declaration & modified further here by, for example, multiplying the 
// //numPassengers by the price and equating that to the price
// createBooking('LH123', 5)

const flight = 'LH234';
const Elliott = {
  name: 'Elliott Thomlison',
  passport: 2102025,
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 2102025) {
    console.log('Checked in!')
  } else {
    console.log('Wrong passport number!')
  }
}

checkIn(flight, Elliott);
console.log(flight)
console.log(Elliott)

//Objects are referencing to the object that is in the memory heap
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.floor(Math.random() * 100000000);
};

newPassport(Elliott);
