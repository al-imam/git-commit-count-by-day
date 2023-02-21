#!/usr/bin/env zx
import "zx/globals";
$.verbose = false;

try {
  await $`git rev-parse --git-dir`;
  echo(chalk.greenBright("ou're in git repo"));
} catch (error) {
  echo(chalk.red("something is wrong!"));
}
