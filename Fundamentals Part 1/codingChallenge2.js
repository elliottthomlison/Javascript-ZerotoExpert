let bodies = {
  markBMI: {
    mass: ['78', '95'],
    height: ['1.69', '1.88']
  },
  johnBMI: {
    mass: ['92', '85'],
    height: ['1.95', '1.76']
  }
}

let mark = Math.floor(bodies.markBMI.mass[0]/bodies.markBMI.height[0]**2)
let john = Math.floor(bodies.johnBMI.mass[1]/bodies.johnBMI.height[1]**2)

// console.log(mark)
// console.log(john)

let markHigherBMI = mark > john ? `Mark's BMI (${mark}) is higher than John's ${john}!` : `John's BMI ${john} is higher than Mark's ${mark}!`;

console.log(markHigherBMI)
