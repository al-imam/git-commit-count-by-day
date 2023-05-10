#!/usr/bin/env zx
import "zx/globals";
import getConfig from "./utility/getConfig.mjs";

$.verbose = false;

const { line, dash, date, wrong, excellent, good, normal } = getConfig(argv);

try {
  await $`git rev-parse --git-dir`;
} catch (error) {
  if (error.stderr.includes("not a git repository")) {
    throw wrong("You're not inside git repository 🥲");
  }
  throw wrong(error.stderr);
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
      name,
      email,
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

const totalCommits = formattedData.reduce((a, v) => a + v.count, 0);

echo(chalk.dim(`  Total ${totalCommits}`));

function colorize(count) {
  return count >= 15
    ? excellent(count)
    : count >= 10
    ? good(count)
    : normal(count);
}

for (const [i, { time, count }] of formattedData.entries()) {
  if (i > line) break;
  echo(dash(`  ${date(time)} - ${colorize(count)}`));
}

echo(chalk.dim(`  Average ${totalCommits / formattedData.length}`));
