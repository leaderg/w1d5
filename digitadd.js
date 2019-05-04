function addDigit(num) {
  var digit1 = Math.floor(num/10); //23 => 2.3 => 2
  var digit2 = num % 10; // total/10 remainder = 3
  return digit2 + digit1;
}

console.log(addDigit(process.argv[2]));