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

// geometrik ortalama
export const geometrik = (data) => {
  let sum = 1

  for (let i = 0; i < data.length; i++) {
    sum *= data[i]
  }

  sum = Math.pow(sum, 1 / data.length)

  return sum
}

// harmonik ortalama
export const harmonik = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += 1 / data[i]
  }

  sum = data.length / sum

  return sum
}

// Ortalama Mutlak sayısı
export const oms = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.abs(data[i] - ort)
  }
  sum /= data.length
  return sum
}

// Standart Sapma
export const standartsapma = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.pow(Math.abs(data[i] - ort), 2)
  }
  sum /= data.length - 1
  sum = Math.pow(sum, 1 / 2)
  return sum
}

// Degisim Alma
export const degisim = (data) => {
  let sapma = standartsapma(data)
  let ort = aritmetic(data)
  return (sapma / ort) * 100
}

// Mod Alma
export const modeCount = (data) => {
  let sayac = 0
  let sec = 0
  let tut = []
  let sum = 0
  let gonder = []
  let k = 0
  for (let i = 0; i < data.length; i++) {
    sec = data[i]
    for (let j = 0; j <= data.length; j++) {
      if (sec == data[j]) {
        sayac++
      }
    }
    sum = sayac
    tut.push(sayac)
    sayac = 0
  }
  sec = 0
  sum = 0
  for (let i = 0; i < tut.length; i++) {
    sum = Math.max(...tut)
    sec = tut[i]
    if (sec == sum) {
      if (gonder[k - 1] != data[i]) {
        gonder[k] = data[i]
        k++
      }
    }
  }
  return gonder
}

//Medyan Alma
export const median = (data) => {
  const mid = Math.floor(data.length / 2),
    nums = [...data].sort((a, b) => a - b)
  return data.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

//Varyans Hesaplama
export const varyans = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.pow(Math.abs(data[i] - ort), 2)
  }
  sum /= data.length - 1
  return sum
}
