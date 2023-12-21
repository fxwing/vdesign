const fs = require("fs");
const path = require("path");

const currentDirectory = process.cwd();
const packageJsonPath = path.resolve(
  currentDirectory,
  "packages/ui/package.json"
);
const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8");
const packageJson = JSON.parse(packageJsonContent);

const command = process.env.COMMAND || "dev";

if (command === "dev") {
  packageJson.main = "./src/index.ts";
  packageJson.module = "";
  packageJson.types = "";
}
if (command === "build") {
  packageJson.main = "./dist/index.cjs";
  packageJson.module = "./dist/index.js";
  packageJson.types = "./dist/index.d.ts";
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
