const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1)
  // console.log(s)
  if (s === 'B' || s === 'E') {
    console.log("You have a middle seat.")
  } else {
    console.log('You got lucky.')
  }
}

checkMiddleSeat('11B')
checkMiddleSeat('11C')
checkMiddleSeat('11E')