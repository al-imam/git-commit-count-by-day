#!/usr/bin/env zx
import "zx/globals";
$.verbose = false;

try {
  await $`git rev-parse --git-dir`;
} catch (error) {
  if (error.stderr.includes("not a git repository")) {
    throw chalk.red("You're not inside git repository 🥲");
  }
  throw chalk.red(error.stderr);
}

const { stdout: output } = await $`git log --no-decorate --date=raw`;
const logs = output
  .split("commit")
  .splice(1)
  .map((l) => l.toLowerCase())
  .map((l) => {
    return l
      .split("\n")
      .filter(Boolean)
      .map((n) => n.trim());
  });
// .map((log) => {
//   const logArray = {};
//   logArray.id = log[0];
//   const d = log[2].split(":")[1].trim().split(" +")[0];
//   logArray.date = new Date(parseInt(d) * 1000);
//   const a = log[1].split(":")[1].trim().split(" ");
//   logArray.author = {
//     name: a[0],
//     email: a[1],
//   };
//   logArray.message = log;
//   return logArray;
// });

echo(chalk.green(JSON.stringify(logs, null, 2)));
