var fs = require('fs');

var data = JSON.parse(fs.readFileSync('unit.json'));

function datum(k, v){
  return `<details>\
<summary> ${k} </summary>\
<blockquote>\n\ ${v} \n</blockquote></details>\n`
}

let readme = '';
data.forEach(function (item, index) {
  // var subject = item['subject'];
  // readme += `<details>\
  // <summary> ${subject} </summary>\
  // <blockquote>\n\n`
  // //console.log(item, index);
  // readme += '\n</blockquote></details>\n';
  var child = datum('Abcd', 'efgh');
  var parent = datum('Imma parent', child);
  readme+=parent;
});

fs.writeFileSync('content.md', readme);
console.log('Built:');
console.log(readme);
