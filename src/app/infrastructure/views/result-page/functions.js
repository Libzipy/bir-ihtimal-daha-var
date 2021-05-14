const data = [10, 12, 15, 20]

export function aritmetic(data) {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }

  sum /= data.length

  return sum
}

export function geometrik(data) {
  let sum = 1

  for (let i = 0; i < data.length; i++) {
    sum *= data[i]
  }

  sum = Math.pow(sum, 1 / data.length)

  return sum
}

export function harmonik(data) {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += 1 / data[i]
  }

  sum = data.length / sum

  return sum
}

// console.log(harmonik(data))
