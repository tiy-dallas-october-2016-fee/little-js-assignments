var fs = require('fs');

var parser = {
  parse: function(fileName) {
    var contents = fs.readFileSync(fileName, 'utf-8');

    var data = {
      //country: 'Afganistan',
      variant: 'Medium',
      fileName: fileName,
      years: []
    };

    var lines = contents.split('\n');
    //console.log(lines.length);

    for (var i = 1; i < lines.length; i++) {
      var line = lines[i];

      if (line.length < 2) {
        continue;
      }

      var lineValues = line.split(',');
      //console.log(lineValues);

      data.country = lineValues[0];

      var yearData = {
        year: lineValues[1].replace(/"/g, ''),
        population: lineValues[3].replace(/"/g, '')
      };

      data.years.push(yearData);
    }

    return data;

  }
};


module.exports = parser;
