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

let mark = bodies.markBMI.mass[0]/bodies.markBMI.height[0]**2
let mark2 = bodies.markBMI.mass[1]/bodies.markBMI.height[1]**2
let john = bodies.johnBMI.mass[0]/bodies.johnBMI.height[0]**2
let john2 = bodies.johnBMI.mass[1]/bodies.johnBMI.height[1]**2

let markHigherBMI = mark > john ? true : false;
let markHigherBMI2 = mark2 > john2 ? true : false;

console.log(markHigherBMI)
console.log(markHigherBMI2)
