const getConfig = ({
  line = 5,
  excellent = "#69ff94",
  good = "#f1fa8c",
  normal = "#ff6e6e",
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
  wrong: chalk.hex(error),
});

const config = getConfig(argv);

export default () => config;
