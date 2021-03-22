const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Weigl',
      'Witsel',
      'Hazard',
    ],
  ],
  score: '4:0',
  scored: ['Lewsandowski', 'Gnarby', 'Lewsandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Question 1
// const fullScores = Object.entries(game.scored)
// console.log(fullScores)

// const scoreOrder = Object.keys(game.scored)
// console.log(scoreOrder)

// const playerScore = Object.values(game.scored)
// console.log(playerScore)

// for (const [x, y] of fullScores) {
//   console.log(`Goal ${x}: ${y}`)
// }

//Question 2
// const x = Object.values(game.odds)
// console.log(Math.floor(x.reduce((a,b) => a+b,0)/x.length))

//Question 3
// const fullOdds = Object.values(game.odds)
//   console.log(`Odds of victory ${game.team1}: ${fullOdds[0]}`)
//   console.log(`Odds of draw: ${fullOdds[1]}`)
//   console.log(`Odds of victory ${game.team2}: ${fullOdds[2]}`)

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}

//Question 4
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
}