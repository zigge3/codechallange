const { lstatSync, readdirSync, readFileSync, readFile } = require("fs");
const { join } = require("path");
let count = 0;

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

getDirectories("exercises").forEach(dn => {
  const fn = `${dn}/example.js`;
  readFile(fn, "utf-8", (err, content) => {
    if (err) {
      console.log("err");
      return;
    }
    console.log(`${dn} had ${content.length} characters`);
    count += content.length;
  });
});

setTimeout(() => {
  console.log(`Total characters used: ${count}`);
}, 50);
