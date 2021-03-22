// let age = 30;
// let oldAge = age;
// age = 31
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'El',
//   age: 30,
// }

// const friend = me;
// friend.age = 31;

// console.log(me)
// console.log(friend)

//primitive types
let lastName = 'Smith';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName)

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'
console.log('Before marriage: ', jessica)
console.log("----------------------")
console.log('After marriage: ', marriedJessica)

//this doesn't work because on line 29 it is a const not a let + the stack/heap
// marriedJessica = {};

//solution to copying the objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
console.log("----------------------")

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2)
console.log("----------------------")
console.log('After marriage + more family: ', jessicaCopy)
