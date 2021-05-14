/* eslint-disable  */

// aritmetik ortalama
export const aritmetic = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }

  sum /= data.length

  return sum
}
/* eslint-disable  */

// geometrik ortalama
export const geometrik = (data) => {
  let sum = 1

  for (let i = 0; i < data.length; i++) {
    sum *= data[i]
  }

  sum = Math.pow(sum, 1 / data.length)

  return sum
}
/* eslint-disable  */

// harmonik ortalama
export const harmonik = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += 1 / data[i]
  }

  sum = data.length / sum

  return sum
}
