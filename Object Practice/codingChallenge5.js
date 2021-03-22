const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [77, 'Substitution'],
  [79, 'Yellow Card'],
  [82, 'Red Card'],
  [85, 'Goal'],
  [89, 'Goal'],
  [92, 'Yellow Card'],
]);

//Question 1
// console.log(gameEvents.values())
const events = new Set(gameEvents.values())
console.log(events)

//Question 2
gameEvents.delete(79)
console.log(gameEvents)

//Question 3 
