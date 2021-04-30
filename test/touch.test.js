import { touchApp } from "../lib/src/services";
import fs from "fs";

describe("touch - make an empty file", () => {
  test("make 'a.txt' at here", async () => {
    const myArguments = process.argv;
    myArguments.push(__dirname + "/a.txt");

    await touchApp.parse(myArguments, { from: "user" });
    expect(fs.existsSync(__dirname + "./a.txt"));
  });

  afterAll(() => {
    fs.unlink(__dirname + "/a.txt", error => {
      if (error) {
        console.error(error);
      }
    });
  });
});