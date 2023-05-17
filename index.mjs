#!/usr/bin/env zx

import "zx/globals";
import getConfig from "./utility/getConfig.mjs";
import gitOutput from "./utility/gitOutput.mjs";
import formatGitOutput from "./utility/formatGitOutput.mjs";
import showCount from "./utility/showCount.mjs";
import showAverage from "./utility/showAverage.mjs";

$.verbose = false;

const { wrong } = getConfig();

try {
  await $`git rev-parse --git-dir`;
} catch (error) {
  if (error.stderr.includes("not a git repository")) {
    throw wrong("You're not inside git repository 😑");
  }
  throw wrong(error.stderr);
}

const output = await gitOutput();

const logArray = formatGitOutput(output);

const total = logArray.reduce((a, v) => a + v.count, 0);

echo(chalk.dim(`  Total ${total}`));

showCount(logArray);

showAverage(total, logArray.length);
