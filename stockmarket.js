//inelegant solution:

function stockMax(inputArray) {
  var profitArray = [];
  var profitInput = [];
  for (var i = 0; i < inputArray.length; i++) {
    for (var n = i + 1; n < inputArray.length; n++) {
      profitInput.push(inputArray[n] - inputArray[i]);
    }
    profitInput.sort((a, b) => (b - a));
    profitArray.push(profitInput[0]);
    profitInput = [];
  }
  profitArray.sort((a, b) => (b - a));
  return profitArray[0];
}

//elegant solution:

function stockMaxMulti(prices, k) {
  // if (prices.length == 0) return 0;
  const evenProfits = (new Array(prices.length)).fill(0);
  const oddProfits = (new Array(prices.length).fill(0));
  for (let t = 1; t < k; t++) {
    let maxThusFar = 0;
    let currentProfits = [];
    let previousProfits;
    if (t % 2 === 1) {
      currentProfits = oddProfits;
      previousProfits = evenProfits;
    } else {
      currentProfits = evenProfits;
      previousProfits = oddProfits;
    }
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, previousProfits[d-1] - prices[d-1]);
      currentProfits[d] = Math.max(currentProfits[d-1],maxThusFar + prices[d]);
    }
  }
  return k % 2 === 0 ? evenProfits[prices.length - 1] : oddProfits[prices.length - 1]
}


console.log(stockMaxMulti([45, 24, 35, 31, 40, 38, 11], 5));

console.log(stockMax([45, 24, 35, 31, 40, 38, 11]));