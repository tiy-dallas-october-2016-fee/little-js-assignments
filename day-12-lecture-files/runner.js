var chalk = require('chalk');

var coolCalculator = require('./calculator.js');
var parser = require('./csv-parser.js');

console.log('what is calc?', coolCalculator);

var result = coolCalculator.add(7, 13);
console.log('I added', result);

result = coolCalculator.subtract(20, 42);
console.log('totally subtracted', result);

console.log('amount of calculations', coolCalculator.totalCalculations);

console.log('what is this?', coolCalculator.multiply);


console.log('parser', parser);
var csvOutput = parser.parse('afganistan-population-un.csv');

console.log('output for', chalk.bgGreen(csvOutput.country), csvOutput);

console.log('');

csvOutput = parser.parse('cambodian-population-un.csv');

console.log('output for', chalk.red(csvOutput.country), csvOutput);
