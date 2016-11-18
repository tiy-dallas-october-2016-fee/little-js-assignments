var arr = [];

//length 0

arr.push('Puppies'); //length 1
arr.push('Honeybadger'); //length 2
var hb = arr.pop(); //removes honeybadger, length 1
//you don't have to save that popped value into a variable
arr.pop(); //removes puppies, length 0




//length 0

arr.push('Megatron'); // length 1
arr.push('Starscream'); // length 2
arr.push('Soundwave'); // length 3

var m = arr.shift(); // Megatron removed, length 2
arr.unshift('Galvatron'); //replace with Galvatron



for (var i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

//console.log(' -- go the other way --');

for (var i = arr.length - 1; i > -1; i--) {
  //console.log(arr[i]);
}

arr.push('Unicron');
arr.push('Ravage');
arr.push('Shockwave');


//console.log('before splice', arr);
var removedSubset = arr.splice(2, 3);
//console.log('removed subset', removedSubset);
//console.log('after removal', arr);


arr.push('Optimus Prime');
arr.push('Hot Rod');
arr.push('Cup');
arr.push('Ironhide');

console.log(arr);

var aSlice = arr.slice(1, 4);

console.log('sliced', aSlice);
console.log('original', arr);
