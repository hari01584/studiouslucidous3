var fs = require('fs');

var data = JSON.parse(fs.readFileSync('unit.json'));

function datum(k, v){
  return `<details>\
<summary> ${k} </summary>\
<blockquote>\n\ ${v.join('\n')} \n</blockquote></details>\n`;
}

let readme = '';
data.forEach(function (item, index) {
  var subject = item['day'];
  var content = item['classes'];

  var childs = [];
  var tex = "";
  for (var key in content) {
    childs.push(datum(key, [content[key].replace(/\n/g, '<br>')]));
    tex += `${key}: ${content[key].replace(/\n/g, '<br>')}<br>`;
  }
  var parent = datum(subject, [tex]);
  readme+=parent;
});

fs.writeFileSync('content.md', readme);
console.log('Built: content.md');
console.log('Content MD File successfully created, You should now copy paste the content into required place of README.md (in root dir)!!')
