var data = {
  country: 'Viet Nam',
  variant: 'Medium Variant',
  years: [
    {
      year: 2015,
      population: 93386
    },
    {
      year: 2010,
      population: 89047
    },
    {
      year: 2005,
      population: 84947
    },
    {
      year: 2000,
      population: 83000
    }
  ]
};

console.log(data);
var sum = 0;

for (var i = 0; i<data.years.length; i++){
  sum += data.years[i].population;
}
var avg = sum / data.years.length;
console.log(avg);


for (var i = 0; i<data.years.length; i++){
  var obj = data.years[i];
  console.log('year: ' + obj.year + ' pop: ' + obj.population);
}
