const lufthansa = {
  airline: 'Air Canada',
  iataCode: 'CA',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(239, 'Elliott Thomlison');
lufthansa.book(523, 'Vicky Qiu');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; 

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa)

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 582, 'Superman')

//Not as popular
//Apply Method
 const flightData = [583, 'George Cooper'];
 book.apply(swiss, flightData);
 console.log(swiss)
//or
 book.call(swiss, ...flightData);
 console.log(swiss)

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind('lufthansa'));

 //Partial Application
 const addTax = (rate, value) => value + value * rate;
 console.log(addTax(0.1,200));

 const addVAT = addTax.bind(null, 0.23);
 //addVAT = value => value + value * 0.23;

 console.log(addVAT(100));
 console.log(addVAT(23));

