// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (x){
    return x.toLowerCase();
  })
}


function nameToAttributes(list) {
  return list.map(function (x) {
    const driverFirst = x.split(' ')[0];
    const driverLast = x.split(' ')[1];

    return {firstName: driverFirst, lastName: driverLast};
  })
}


function attributesToPhrase(list) {
  return list.map(function (y){
    console.log(y[name] + ' is from ' + y[hometown])
  })
}