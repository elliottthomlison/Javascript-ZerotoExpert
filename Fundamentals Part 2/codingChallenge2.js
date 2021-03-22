// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const bills = ['125', '555', '44']
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(bills, tip) 

// //

// jonas.bestfriend = 'Michael'
// jonas['bestfriend'] = 'Michael'

//

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: '1991',
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jones.job}, he has ${this.hasDriversLicense} ? 'a' : 'no'} driver's license.` 
  },
  getSummary()
};
