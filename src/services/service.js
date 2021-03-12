const { readFile } = require("../utils");

let content = readFile(__dirname + "/sample.txt");
content = content.split("\r\n");

for (const name of content) {
  if (name.indexOf('/') !== -1) {
    console.log(`${name} is directory`);
  } else {
    console.log(`${name} is file.`);
  }
}