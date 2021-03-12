const { readFile } = require("../utils");

let content = readFile(__dirname + "/sample.txt");
content = content.split("\r\n");