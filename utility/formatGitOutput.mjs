function formatGitOutput(output) {
  const logs = output
    .split("\n")
    .slice(0, -1)
    .map((n) => {
      const [hash, name, email, time, message] = n.split(" | ");
      return { hash, name, email, time, message };
    })
    .reduce((accumulator, currentValue) => {
      if (accumulator[currentValue.time]) {
        accumulator[currentValue.time].push(currentValue);
        return accumulator;
      }
      accumulator[currentValue.time] = [currentValue];
      return accumulator;
    }, {});

  return convertToArray(logs);
}

function convertToArray(logs) {
  const formattedData = [];

  for (const key in logs) {
    formattedData.push({ time: key, count: logs[key].length });
  }

  return formattedData;
}

export default formatGitOutput;
