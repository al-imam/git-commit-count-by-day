import getConfig from "./getConfig.mjs";

const { good, excellent, normal } = getConfig();

function colorize(count) {
  return count >= 15
    ? excellent(count)
    : count >= 10
    ? good(count)
    : normal(count);
}

export default colorize;
