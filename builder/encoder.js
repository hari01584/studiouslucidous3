var fs = require('fs');

var data = JSON.parse(fs.readFileSync('unit.json'));

function datum(k, v){
  return `<details>\
<summary> ${k} </summary>\
<blockquote>\n\ ${v.join('\n')} \n</blockquote></details>\n`;
}

let readme = '';
data.forEach(function (item, index) {
  var subject = item['subject'];
  var content = item['content'];

  var childs = [];
  for (var key in content) {
    childs.push(datum(key, [content[key].replace('\n', '<br>')]));
  }
  var parent = datum(subject, childs);
  readme+=parent;
});

fs.writeFileSync('content.md', readme);
console.log('Built:');
console.log(readme);
