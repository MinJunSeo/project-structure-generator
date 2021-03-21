const { program } = require("./services");

program
.action(() => {
  console.error("해당 명령어를 찾을 수 없습니다.");
  program.help();
});

program.parse();