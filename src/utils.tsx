export const generateRandomTimes = (total: number) => {
  // generate random total times
  const randomTimes: string[] = [];
  Array(total)
    .fill(0)
    .forEach((_) => {
      const randomHr = "0" + Math.floor((Math.random() * 100) % 12); // append 0 to make single digit values to two digit values
      const randomMin = "0" + Math.floor((Math.random() * 100) % 60);
      randomTimes.push(randomHr.slice(-2) + ":" + randomMin.slice(-2)); // slice if values were already two digit and now is three digit
    });
  return randomTimes;
};
