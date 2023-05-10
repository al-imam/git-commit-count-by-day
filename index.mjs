#!/usr/bin/env zx
import "zx/globals";
import getConfig from "./utility/getConfig.mjs";
import colorize from "./utility/colorize.mjs";
import gitOutput from "./utility/gitOutput.mjs";
import formatGitOutput from "./utility/formatGitOutput.mjs";

$.verbose = false;

const { line, dash, date, wrong } = getConfig();

try {
  await $`git rev-parse --git-dir`;
} catch (error) {
  if (error.stderr.includes("not a git repository")) {
    throw wrong("You're not inside git repository 😑");
  }
  throw wrong(error.stderr);
}

const output = await gitOutput();

const formattedData = formatGitOutput(output);

const totalCommits = formattedData.reduce((a, v) => a + v.count, 0);

echo(chalk.dim(`  Total ${totalCommits}`));

for (const [i, { time, count }] of formattedData.entries()) {
  if (i > line) break;
  echo(dash(`  ${date(time)} - ${colorize(count)}`));
}

echo(chalk.dim(`  Average ${totalCommits / formattedData.length}`));
