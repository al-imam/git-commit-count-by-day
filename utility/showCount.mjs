import colorize from "./colorize.mjs";
import getConfig from "./getConfig.mjs";

const { line, date, dash } = getConfig();

function showCount(array) {
  for (const [i, { time, count }] of array.entries()) {
    if (i > line) break;
    echo(dash(`  ${date(time)} - ${colorize(count)}`));
  }
}

export default showCount;
