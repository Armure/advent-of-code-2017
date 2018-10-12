const input = `3, 4, 1, 5`
const fInput = input.split(',').map(val => parseFloat(val))

const length = 5
let list = [...Array(length)].map((val, idx) => idx)
console.log(list)

let skip = 0
let index = 0

fInput.forEach(val => {
  const startIndex = index
  const endIndex = (index + val) % length

  if (val === 1 || val === 0) {
    list = list
  } else if (startIndex === endIndex) {
    list = list.reverse()
  } else if (startIndex < endIndex) {
    const beg = list.slice(0, startIndex)
    const mid = list.slice(startIndex, endIndex).reverse()
    const end = list.slice(endIndex, length)
    list = beg.concat(mid, end)
  } else {
    const beg = list.slice(0, endIndex)
    const mid = list.slice(endIndex, startIndex)
    const end = list.slice(startIndex, length)

    const reversed = [].concat(end, beg).reverse()
    const rEnd = reversed.slice(0, end.length)
    const rBeg = reversed.slice(end.length, reversed.length)

    list = rBeg.concat(mid, rEnd)
  }
  console.log(list)

  index += val + skip
  skip++
})

// console.log(list)
