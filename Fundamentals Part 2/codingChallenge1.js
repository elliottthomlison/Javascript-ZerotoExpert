const calcAverage = (a, b, c) => (a + b + c) / 3;

const dScore = calcAverage(44, 23, 71)
const kScore = calcAverage(65, 54, 49)

const checkWinner = function (avgD, avgK) {
  if (avgD >= 2 * avgK){
    console.log(`dolphins win ${avgD} vs ${avgK}!`)
  } else if (avgK >= 2 * avgD) {
    console.log(`koalas win ${avgK} vs ${avgD}`)
  } else {
    console.log(`no team wins`)
  }
}
checkWinner(dScore, kScore)