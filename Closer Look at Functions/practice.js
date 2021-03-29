const reverse = function(str) {
   return str.split('').reverse().join('')
}

const adjuster = function(str) {
  return str.split(' ').join('-----')
} 

const transformation = function(str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`);
  console.log('------------------')
}

transformation('This is a test of my understanding', reverse)
transformation('This is a test of my understanding', adjuster)

const greet = (greeting) => name => console.log(`${greeting} ${name}`) 

const 