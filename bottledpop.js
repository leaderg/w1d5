totalDrinks = 0;
var bottles = 0;
var empties = 0;
var caps = 0;

var bottlesFromCaps = 0;
var bottlesFromEmpties = 0;

initialInvestment = Number(process.argv[2]);

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
    bottlesFromCaps += 1;
  }
}

function emptiesToBottles(num) {
  if (empties >= 2) {
    bottles += Math.floor(num / 2);
    empties -= num;
    bottlesFromEmpties += 1;
  }
}


moneyToBottles(initialInvestment);
while (bottles > 0) {
  bottlesDrunk(1);
  emptiesToBottles(empties);
  capsToBottles(caps);
}

console.log("Your Soda Stats:\n");
console.log(`Total Bottles Drank: \n${totalDrinks}\n`);
console.log(`Total Earned \nfrom Empties:\n${bottlesFromEmpties}\n\nTotal Earned \nfrom Caps:\n${bottlesFromCaps}`);