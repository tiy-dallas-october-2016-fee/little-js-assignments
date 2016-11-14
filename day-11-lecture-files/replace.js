
var longString = 'MedAssets is a company in Plano. They do medical stuff. The North Dallas .NET Users Group meets at MedAssets. I knew some programmers there who had to deal with them changing their name to something else. I do not want to work at MedAssets because the train does not go anywhere near there. However, Medassets has free soda, so that would be nice.';

//change "MedAssets" to "nThrive"
//this is not the best way to do this
var newString = longString;

while (newString.indexOf('MedAssets') > -1) {
  newString = newString.replace('MedAssets', 'nThrive');
}



newString = longString.replace(/MedAssets/gi, 'nThrive');

console.log(newString);
