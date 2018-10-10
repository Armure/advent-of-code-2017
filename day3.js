const input = 325489

let gridSize = Math.ceil(Math.sqrt(input))
if (gridSize % 2 === 0) gridSize += 1

const distToOuter = (gridSize - 1) / 2

function getMaxForRow (size) {
  return size * size
}
const max = getMaxForRow(gridSize)
const fourth = max - ((gridSize - 1) / 2)
const third = fourth - (gridSize - 1)
const second = third - (gridSize - 1)
const first = second - (gridSize - 1)

const firstDiff = Math.abs(input - first)
const secondDiff = Math.abs(input - second)
const thirdDiff = Math.abs(input - third)
const fourthDiff = Math.abs(input - fourth)

const min = Math.min(firstDiff, secondDiff, thirdDiff, fourthDiff)

const steps = min + distToOuter
console.log(steps)
