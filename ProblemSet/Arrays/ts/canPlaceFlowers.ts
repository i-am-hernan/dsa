function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  flowerbed.forEach((plot, i) => {
    if ((plot == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) || (plot == 0 && flowerbed[i - 1] == 0 && typeof (flowerbed[i + 1]) == "undefined") || (plot == 0 && flowerbed[i + 1] == 0 && typeof (flowerbed[i - 1]) == "undefined") || (flowerbed.length == 1 && plot == 0)) {
      count++;
      flowerbed[i]++;
    }
  })
  return n <= count;
}

let testCases = [
  {
    flowerbed: [0, 0, 1, 0, 0],
    n: 1
  }
]

testCases.forEach((test, i) => (console.log(canPlaceFlowers(test.flowerbed, test.n)))) 
