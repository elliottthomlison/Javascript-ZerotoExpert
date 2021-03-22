const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  }
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy', 
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}

//Property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);

//Property VALUES
const values = Object.values(openingHours)
// console.log()

const full = Object.entries(openingHours)
// console.log(full)

//Creates a string with the values found within the object
for (const [x, {open, close}] of full) {
  console.log(`On ${x} we open at ${open} and close at ${close}`)
}

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item)

// for (const item of menu.entries()) {
//   console.log (`${item[0]}: ${item[1]}`);
// }

// console.log(menu.entries())

// for (const keys of Object.keys(restaurant)){
//   console.log(keys.length)
// }

// const properties = Object.keys(restaurant)
//   console.log(properties.length)


// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories) 
// console.log(restaurant.name, restaurant.openingHours)

// const arr = [2,3,4];
// const a = arr[0]
// const b = arr[1] 
// const c = arr[2]

// console.log(a,b,c)

// const arr = [2,3,4];
// const [x, y, z] = arr;
// console.log (x, y, z)

// let [first, , second] = restaurant.categories;
// console.log([first, second]);

// Switching variables
// const temp = first,
// first = second,
// second = temp
// console.log(first, second)

// [first, second] = [second, first]
// console.log([first, second]);

// console.log(restaurant.order(1, 1));
// const [starter, mainCourse] = (restaurant.order(2, 0));
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, ,j] = [nested]
// console.log(i, j) 
// console.log(...nested)

// const [i, , [j, k]] = nested
// console.log(i, j, k)

// const [p=1, q=2, r=3] = [8, 9];
// console.loog(p, q, r)



// const str = 'Jonas';
// const letters = [...str];
// console.log(...str)

// const arr = ['Jonas', 'Ashley', 'John'];
// let words = [...arr];
// let words2 = [...arr[1]];
// console.log(...arr)
