const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
}

//This is a higher-order function (takes in a function as a parameter)
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`);
  console.log('------------------')
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
  console.log('HIGHFIVE');
}