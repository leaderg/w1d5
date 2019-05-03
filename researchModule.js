//list of values
var list = [];

//sorts list
function sortedList() {
  return list.sort((a,b) => (a - b));
}

//adds number from research.js to list
const addToList = function(num) {
  list.push(num);
  console.log(`${num} is added to list, which is now ${list.length} numbers long.`)
};
//returns data from the sortedList function that's inaccessable from research.js
const getSortedData = function() {
  return sortedList();
};


//exported object to research.js
module.exports =
{
//adds number from research.js to list
addToList: function(num) {
  list.push(num);
  console.log(`${num} is added to list, which is now ${list.length} numbers long.`)
},
//returns data from the sortedList function that's inaccessable from research.js
getSortedData: function() {
  return sortedList();
}
}


/* Additional way to export data
===================================
//adds number from research.js to list
const addToList = function(num) {
  list.push(num);
  console.log(`${num} is added to list, which is now ${list.length} numbers long.`)
};
//returns data from the sortedList function that's inaccessable from research.js
const getSortedData = function() {
  return sortedList();
};

module.exports = { "addToList" : addToList, "getSortedData": getSortedData} */