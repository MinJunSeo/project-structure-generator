const { program } = require("./services");
program.parse();


const command = process.argv[2];

if (!command) {
  program.help({ error: true });
}