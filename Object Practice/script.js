// // let age = 30;
// // let oldAge = age;
// // age = 31
// // console.log(age);
// // console.log(oldAge);

// // const me = {
// //   name: 'El',
// //   age: 30,
// // }

// // const friend = me;
// // friend.age = 31;

// // console.log(me)
// // console.log(friend)

// //primitive types
// let lastName = 'Smith';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName)

// //reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Smith',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis'
// console.log('Before marriage: ', jessica)
// console.log("----------------------")
// console.log('After marriage: ', marriedJessica)

// //this doesn't work because on line 29 it is a const not a let + the stack/heap
// // marriedJessica = {};

// //solution to copying the objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Smith',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2)
// jessicaCopy.lastName = 'Davis'
// console.log("----------------------")

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage: ', jessica2)
// console.log("----------------------")
// console.log('After marriage + more family: ', jessicaCopy)

const ordersSet = new Set ([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Risotto',
  'Risotto',
  'Risotto',
  'Risotto',
  'Risotto',
]);

// console.log(ordersSet)

// console.log(new Set('Elliott'))
// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('poop'))

// ordersSet.add('Garlic Poop')
// ordersSet.delete('Pasta')

// ordersSet.clear()
// console.log(ordersSet)

// for (const order of ordersSet) console.log(order)

//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Manager']
// console.log(staff)

// const staffUnique = new Set(staff)
// console.log(staffUnique)

// const staffUnique2 = [...new Set(staff)]
// console.log(staffUnique2)
// console.log(new Set(staff).size)

// const rest = new Map();
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'firenze, italy')
// rest.set(2, 'lisbon, portugal')
// console.log(rest)

// rest
// .set('categories', ['ialian', 'pizzeria', 'words'])
// .set('open', 11)
// .set('close',23)
// .set(true, 'we are open')
// .set(false, 'we are closed')
// console.log(rest.get('name'))
// console.log(rest)

// const time = 5;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const question = new Map([
  ['question', 'What is good?'],
  [1, 'poop'],
  [2, 'pee'],
  [3, 'lalala'],
]);
console.log(question)

console.log(Object.entries)