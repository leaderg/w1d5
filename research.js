var externalFunctions = require("./researchModule");

externalFunctions.addToList(5);
externalFunctions.addToList(100);
externalFunctions.addToList(12);
externalFunctions.addToList(421);
externalFunctions.addToList(1);
externalFunctions.addToList(4);
externalFunctions.addToList(5);
externalFunctions.addToList(99);

console.log(`\nList variable type when accessed from this file: ${typeof externalFunctions.list}\n`);
console.log(`list sorting function typeof when attempting to \naccess from this file: ${typeof sortedList}\n`);

console.log(`This is the list sorted using the sort and \nreturn function: ${externalFunctions.getSortedData()}`);