var fs = require('fs');

var jsn = [];
let s1 = {
  "subject":"UCS303 (Operating system)"
};
let s1c = {
  "Course objective:":"Role and purpose of the operating system, Functionality of a typical operating \
  system, managing atomic access to OS objects.",
  "Course learning outcomes (CLOs):":`On completion of this course, the students will be able to
1. Explain basic operating system concepts such as overall architecture, interrupts, APIs, user
mode and kernel mode.`
}
s1["content"] = s1c;

jsn.push(s1);

var json = JSON.stringify(jsn, null, '\t');
fs.writeFile('unit.json', json, 'utf8', ()=>console.log("Success"));

console.log(s1);
