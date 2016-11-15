
var otherThing = {
  doThing: function() {

  },

  multiply: function() {

  }
};

var calc = {

  totalCalculations: 0,

  add: function(num0, num1) {
    var result = num0 + num1;
    this.totalCalculations += 1;
    return result;
  }

};


calc.subtract = function(num0, num1) {
  var result = num0 - num1;
  this.totalCalculations += 1;
  return result;
}

module.exports = calc;
