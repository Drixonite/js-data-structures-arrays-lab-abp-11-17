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
  drivers.splice(2, 0, 'Broom');
}

function prependDriver(Arnold) {
  drivers.splice(0, 0, 'Arnold');
}

function removeLastDriver() {
  drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
  drivers.slice(1);
}
