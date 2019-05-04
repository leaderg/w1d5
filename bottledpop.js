totalDrinks = 0;
var bottles = 0;
var empties = 0;
var caps = 0;

initialInvestment = 40;

function moneyToBottles(num) {
  bottles += Math.floor(num / 2);
}

function bottlesDrunk(num) {
  totalDrinks += num;
  empties += num;
  caps += num;
  bottles -= num;
}

function capsToBottles(num) {
  if (caps >= 4) {
    bottles += Math.floor(num / 4);
    caps -= num;
  }
}

function emptiesToBottles(num) {
  if (empties >= 2) {
    bottles += Math.floor(num / 2);
    empties -= num;
  }
}


moneyToBottles(initialInvestment);
while (bottles > 0) {
  bottlesDrunk(1);
  emptiesToBottles(empties);
  capsToBottles(caps);
}

console.log(totalDrinks);