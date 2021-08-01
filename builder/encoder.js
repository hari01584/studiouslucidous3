var fs = require('fs');

var data = JSON.parse(fs.readFileSync('unit.json'));

String readme = '';
data.forEach(function (item, index) {
  console.log(item, index);
});
