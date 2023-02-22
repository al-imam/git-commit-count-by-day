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

const { stdout: output } =
  await $`git log --format='%H | %aN | %aE | %as | %s'`;

const logs = output
  .split("\n")
  .slice(0, -1)
  .map((n) => {
    const [hash, name, email, time, message] = n.split(" | ");
    return {
      hash,
      author: {
        name,
        email,
      },
      time,
      message,
    };
  })
  .reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.time]) {
      accumulator[currentValue.time].push(currentValue);
      return accumulator;
    }
    accumulator[currentValue.time] = [currentValue];
    return accumulator;
  }, {});
