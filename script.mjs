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

const argument = ({
  line = 5,
  goodColor = "#69ff94",
  normalColor = "#f1fa8c",
  badColor = "#ff6e6e",
  dateColor = "#d6acff",
  dashColor = "#fff",
} = {}) => ({
  line: line - 1,
  goodColor,
  normalColor,
  badColor,
  dateColor,
  dashColor,
});

const options = argument(argv);

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

const formattedData = [];

for (const key in logs) {
  formattedData.push({ time: key, count: logs[key].length });
}

echo(chalk.dim(`  Total ${formattedData.reduce((a, v) => a + v.count, 0)}`));

const white = chalk.hex(options.dashColor);
const purple = chalk.hex(options.dateColor);
const green = chalk.hex(options.goodColor);
const red = chalk.hex(options.badColor);
const yellow = chalk.hex(options.normalColor);

for (const [i, { time, count }] of formattedData.entries()) {
  if (i > options.line) break;
  echo(
    white(
      `  ${purple(time)} - ${
        count > 20 ? green(count) : count > 15 ? yellow(count) : red(count)
      }`
    )
  );
}
