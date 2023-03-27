let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

function countRound(count) {
  return Math.round(count);
}

array.forEach((count) => {
  console.log(countRound(count));
});
