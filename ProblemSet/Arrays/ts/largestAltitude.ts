function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let maxAltitude = 0;
  gain.forEach((val: number) => {
    altitude += val;
    maxAltitude = Math.max(altitude, maxAltitude);

  })
  console.log('altitude',altitude)
  return maxAltitude;

};

let testLargestAltitude = (): void => {
  let test = [
    [-5, 1, 5, 0, -7],
    [-4, -3, -2, -1, 4, 3, 2]
  ]

  test.forEach((val: number[]) => {
    console.log(largestAltitude(val))
  })

}
testLargestAltitude()
