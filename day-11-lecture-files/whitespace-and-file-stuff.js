//console.log('hello     Bob');

//console.log('hello\t\t\t\t\t\t\t\t\t\tFred');

//console.log('hi\nnewline')


//for microsoft, new lines are \r\n



var fs = require('fs');
var fileContents = fs.readFileSync('cambodia-pop.csv', 'utf-8');
//console.log(fileContents);

var lines = fileContents.split('\n');
console.log('yay lines', lines);

var i = 1;

while(i < lines.length - 1){
  var indivArray = lines[i].split(",");
  var lastThing = indivArray[3];
  lastThing = lastThing.replace(/"/g, '');


  console.log(lastThing);
  i++;
}
