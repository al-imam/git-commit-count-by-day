export default (total, length) => {
  if (total === 0) return;
  echo(chalk.dim(`  Average ${round(total / length)}`));
};

function round(number = 5) {
  if (number.toString().includes(".")) {
    return number.toFixed(2);
  }
  return number;
}
