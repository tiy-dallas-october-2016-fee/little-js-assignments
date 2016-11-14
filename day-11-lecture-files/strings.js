
var sentence = 'Hello my name is Bob.';
var index = sentence.indexOf('n');

console.log('index', index);

var sub = sentence.substr(index, 5);
console.log('substr', sub);

sub = sentence.substring(index, 15);
console.log('substring', sub);




//var line = 'Paul,McArtney,67,m';
//var line = 'Antiochus,Epiphanes,2150,m'
var line = 'Eric,Sowell,40,m';

//use substr to extract the last name of smith into a substring
//use substring to extract the last name of smith into a substring

var startIndex = 5;
var count = 8;
var endIndex = 13;

var output = line.substr(startIndex, count);
output = line.substring(startIndex, endIndex);
console.log('output', output);

//How can we avoid hard-coding these values, because we can't assume the locations will always be the same: startIndex, endIndex?

//position for first comma
//position of second comma (after first + 1)
//substring between

startIndex = line.indexOf(',');
endIndex = line.indexOf(',', startIndex + 1);
console.log('start index', startIndex);
console.log('end index', endIndex);

output = line.substring(startIndex + 1, endIndex);
console.log('calculated output', output);


//split

var lineAsArray = line.split(',');
console.log(lineAsArray);
console.log(lineAsArray[1]);



line = 'Bob|Seger|71|m';
//line = 'Stan|Lee|93|m';

//log his age
//console.log(line.split('|')[2]);
lineAsArray = line.split('|');
var age = lineAsArray[2];
console.log('age', age);
