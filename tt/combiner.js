require('./encoder.js');
var fs = require("fs");
var text = fs.readFileSync("./2co3.md");
text = String(text);
var initial = text.substring(0, text.indexOf("## Timetable:"));

var c = fs.readFileSync("./content.md");
c = String(c);

var f = initial + "## Timetable:\n" + c;
console.log(initial);
fs.writeFileSync("./2co3.md", f);


require('./encode_wa.js');
var fs = require("fs");
var text = fs.readFileSync("./2co3_wa.md");
text = String(text);
var initial = text.substring(0, text.indexOf("## Simplified TT:"));

var c = fs.readFileSync("./content_wa.md");
c = String(c);

var f = initial + "## Simplified TT:\n" + c;
console.log(initial);
fs.writeFileSync("./2co3_wa.md", f);
