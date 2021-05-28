import fs from "fs";
import { touchApp } from "../lib/src/services";

describe("touch - make an empty file", () => {
  describe("filename === 'a.txt'", () => {
    beforeAll(() => {
      if (fs.existsSync(__dirname + "/a.txt")) {
        fs.unlinkSync(__dirname + "/a.txt");
      }
    });

    test("make 'a.txt' at here", async () => {
      const myArguments = process.argv;
      myArguments.push(__dirname + "/a.txt");
  
      await touchApp.parse(myArguments, { from: "user" });
      expect(fs.existsSync(__dirname + "/a.txt")).toBeTruthy();
    });
  });
});