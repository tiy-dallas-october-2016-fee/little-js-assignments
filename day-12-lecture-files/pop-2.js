var data = {
  country: 'Viet Nam',
  variant: 'Medium Variant',
  years: '2015,2010,2005',
  population: '93386,89047,84947'
};

var pops = data.population.split(',');
var years = data.years.split(',');


for (var i = 0; i < pops.length; i++) {
  console.log('year ' + years[i] + ' pop: ' + pops[i]);
}
