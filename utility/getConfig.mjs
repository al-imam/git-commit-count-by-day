export default ({
  line = 5,
  good = "#69ff94",
  normal = "#f1fa8c",
  excellent = "#ff6e6e",
  date = "#d6acff",
  dash = "#fff",
  error = "#ff5555",
}) => ({
  line: line - 1,
  good: chalk.hex(good),
  normal: chalk.hex(normal),
  excellent: chalk.hex(excellent),
  date: chalk.hex(date),
  dash: chalk.hex(dash),
  error: chalk.hex(error),
});
