const getConfig = ({
  line = 4,
  excellent = "#69ff94",
  good = "#f1fa8c",
  normal = "#ff6e6e",
  date = "#d6acff",
  dash = "#fff",
  error = "#ff5555",
}) => ({
  line: parse(line),
  good: chalk.hex(good),
  normal: chalk.hex(normal),
  excellent: chalk.hex(excellent),
  date: chalk.hex(date),
  dash: chalk.hex(dash),
  wrong: chalk.hex(error),
});

function parse(s) {
  try {
    return parseInt(s) - 1;
  } catch {
    return 4;
  }
}

const config = getConfig(argv);

export default () => config;
