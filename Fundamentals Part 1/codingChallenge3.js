let teams = {
  dolphins: {
    points: [96, 108, 89],
  },
  koalas: {
    points: [88, 91, 110],
  }
}

const dAvg = teams.dolphins.points.reduce(function(prev, cur) {
  return prev + cur
}, 0)/teams.dolphins.points.length
const kAvg = teams.koalas.points.reduce(function(prev, cur) {
  return prev + cur
}, 0)/teams.dolphins.points.length
// console.log(dAvg > kAvg ? true : false)

if (dAvg > kAvg && dAvg >= 100){
  console.log('Dolphins win')
}
  // } else if (kAvg > dAvg && kAvg >= 100){
//   console.log('Koalas win!')
// } else if (kAvg === dAvg){
//   console.log('Both win')
// } else {
//   console.log('shit')
// }

