const input = `0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11`
const fInput = input.split('\t').map(val => parseFloat(val))

function redistribute (input) {
  const clone = input.map(val => val)
  const max = Math.max(...clone)
  let index = clone.indexOf(max)

  let value = max
  clone[index] = 0

  while (value > 0) {
    value--
    index = index < clone.length - 1 ? index + 1 : 0
    clone[index]++
  }

  return clone
}

const configurations = [fInput.join(',')]
let newConfig = redistribute(fInput)
let total = 1

while (!alreadyExists(configurations, newConfig)) {
  total++
  configurations.push(newConfig.join(','))
  newConfig = redistribute(newConfig)
}

console.log(total)

function alreadyExists (existing, newArray) {
  const newStringed = newArray.join(',')
  return existing.includes(newStringed)
}
