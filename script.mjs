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
  .map((n) => n.toLowerCase());
