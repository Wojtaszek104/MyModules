const splitArrayToChunks = (inputArray, perChunk) => {
  const result = [];
  for (let i = 0; i < inputArray.length; i += perChunk) {
    let chunk = inputArray.slice(i, i + perChunk);
    result.push(chunk);
  }
  const filteredResults = result.slice(0, 5);

  return filteredResults;
};

export default splitArrayToChunks;
