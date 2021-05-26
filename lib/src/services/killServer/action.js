const { spawn } = require("child_process");
const fs = require("fs");
const { MessagePrinter, readFile } = require("../../utils");
const { InternalProgramError } = require("../../exceptions");

const killProcess = (pid) => {
  pid = parseInt(pid);
  if (typeof pid !== "number") {
    MessagePrinter.Exception("'pid' must be integer type");
    return;
  }

  const taskkill = spawn("taskkill", ["/f", "/pid", `${pid}`]);
  
  taskkill.stderr.on("data", data => {
    MessagePrinter.Exception(InternalProgramError.message + " at taskkill");
  });
  taskkill.on("exit", code => {
    if (code) {
      return;
    }
    MessagePrinter.Success("Server Kill");
  });
};

const parsePid = (processList) => {
  processList = processList.split("\r\n");
  const hashTable = {};

  for (let i = 0; i < processList.length - 1; i++) {
    const process = processList[i];
    let pidStart = process.length;

    while (pidStart) {
      if (process[pidStart - 1] === ' ') {
        break;
      }
      pidStart--;
    }

    const pid = process.slice(pidStart);
    if (!(pid in hashTable)) {
      hashTable[pid] = true;
    }
  };

  for (const pid in hashTable) {
    killProcess(pid);
  }
};

const findProcess = (port) => {
  port = parseInt(port);

  if (typeof port !== "number") {
    MessagePrinter.Warn("'port' must be integer type!");
  }

  const findstr = spawn("findstr", [`${port}`, `${__dirname}\\temp.txt`]);

  findstr.stdout.on("data", data => {
    parsePid(data.toString());
  });
  findstr.stderr.on("data", data => {
    MessagePrinter.Exception(InternalProgramError.message + " at findstr");
  });
  findstr.on("exit", code => {
    fs.writeFile(__dirname + "\\temp.txt", '', error => {
      if (error) {
        MessagePrinter.Exception(__dirname + "\\temp.txt is not exists");
      }
    });
  
    if (code) {
      MessagePrinter.Exception("Process Not Found");
      return;
    }
  });
};

const killServer = (port) => {
  const netstat = spawn("netstat", ["-ano"]);
  let out = '';

  netstat.stdout.on("data", data => {
    out += data;
  });
  netstat.stderr.on("data", data => {
    MessagePrinter.Exception(data);
  });
  netstat.on("exit", code => {
    if (code) {
      MessagePrinter.Exception(InternalProgramError.message + " at netstat");
      return;
    }

    out = out.split("\r\n");

    for (let i = 0; i < 4; i++) {
      out.shift();
    }

    for (let i = 0; i < out.length - 1; i++) {
      fs.appendFileSync(__dirname + "\\temp.txt", out[i] + "\r\n");
    }
    
    findProcess(port);
  });
};

killServer(3000);
// killProcess(5136);