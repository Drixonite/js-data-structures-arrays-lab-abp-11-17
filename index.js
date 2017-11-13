// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(Ralph) {
  drivers.push(Ralph);
}

function destructivelyPrependDriver(Bob) {
  drivers.unshift(Bob);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(Broom) {
  return drivers.splice(0, 4, 'Broom');
}

function prependDriver(Arnold) {
  return drivers.splice(0, 4, 'Arnold');
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
