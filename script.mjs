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

const log = await $`git log --no-decorate --date=raw`;
echo(chalk.blue(log));
