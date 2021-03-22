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

console.log('Team Rosters:')
const players1 = game.players[0]
const players2 = game.players[1]
console.log('Team 1: ',players1, '\n', 'Team 2: ',players2)

console.log('\n')

const gk = players1[0]
const fieldPlayers = players1.slice(1,players1.length)
console.log('Goalkeeper:')
console.log(gk)
console.log('Field Players:')
console.log(fieldPlayers)

console.log('\n')

console.log('All Players:')
const allPlayers = players1 + players2
console.log([allPlayers])

console.log('\n')

console.log('Team 1 Final:')
const players1Final = players1.push('Thiago', 'Coutinho', 'Perisic')
console.log([players1Final])

console.log('\n')

console.log('Game Lines:')
const team1Wins = game.odds.team1
const teamsTie = game.odds.x
const team2Wins = game.odds.team2

console.log(' Team 1 Wins:', team1Wins, '\n','Teams Tie:', teamsTie, '\n','Team 2 Wins:', team2Wins)

const printGoals = function() {
}

console.log('\n')

team1Wins > team2Wins && console.log('Team 1 is more likely to win')
team1Wins < team2Wins && console.log('Team 2 is more likely to win') 


