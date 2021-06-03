/* eslint-disable  */

// aritmetik ortalama
export const aritmetic = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }

  sum /= data.length
  const a = sum.toFixed(2)
  return a.toString()
}

// geometrik ortalama
export const geometrik = (data) => {
  let sum = 1

  for (let i = 0; i < data.length; i++) {
    sum *= data[i]
  }

  sum = Math.pow(sum, 1 / data.length)
  const a = sum.toFixed(2)
  return a.toString()
}

// harmonik ortalama
export const harmonik = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += 1 / data[i]
  }

  sum = data.length / sum
  const a = sum.toFixed(2)
  return a.toString()
}

// Ortalama Mutlak sayısı
export const oms = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.abs(data[i] - ort)
  }
  sum /= data.length
  const a = sum.toFixed(2)
  return a.toString()
}

// Standart Sapma
export const standartsapma = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.pow(Math.abs(data[i] - ort), 2)
  }
  sum /= data.length - 1
  sum = Math.pow(sum, 1 / 2).toFixed(2)
  return sum.toString()
}

// Degisim Alma
export const degisim = (data) => {
  let sapma = standartsapma(data)
  let ort = aritmetic(data)
  const a = ((sapma / ort) * 100).toFixed(2)
  return a.toString()
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
  return gonder.toString()
}

//Medyan Alma
export const median = (data) => {
  const mid = Math.floor(data.length / 2),
    nums = [...data].sort((a, b) => a - b)
  const a = (data.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2).toFixed(2)
  return a.toString()
}

//Varyans Hesaplama
export const varyans = (data) => {
  let sum = 0
  let ort = aritmetic(data)
  for (let i = 0; i < data.length; i++) {
    sum += Math.pow(Math.abs(data[i] - ort), 2)
  }
  sum /= data.length - 1
  const a = sum.toFixed(2)
  return a.toString()
}

//Eleman Sayısı Bulma
export const size = (data) => {
  let sum = data.length
  const a = sum.toFixed(0)
  return a.toString()
}

//Sıralama Yapma
export const rank = (data) => {
  let sort = data.sort(function (a, b) {
    return a - b
  })
  return sort.toString()
}

//Permütason Hesaplama

export const perm = (n, r) => {
  let secim = r
  function faktoriel(sayi) {
    var sonuc = 1
    for (let i = 1; i < sayi + 1; i++) {
      sonuc *= i
    }
    return sonuc
  }
  let sum = faktoriel(n) / faktoriel(n - secim)
  const a = sum.toFixed(2)
  return a.toString()
}

//Kombinasyon Hesaplama
export const comp = (n, r) => {
  let secim = r
  function faktoriel(sayi) {
    var sonuc = 1
    for (let i = 1; i < sayi + 1; i++) {
      sonuc *= i
    }
    return sonuc
  }
  let sum = faktoriel(n) / (faktoriel(r) * faktoriel(n - secim))
  const a = sum.toFixed(2)
  return a.toString()
}

//Histogram Grafiği
export const histogram = (data, grup) => {
  let a = data.sort(function (a, b) {
    return a - b
  })
  console.log('a', a)
  let b = Math.max(...data)
  console.log('max b', b)
  let c = Math.min(...data)
  console.log('min c', c)
  let d = b - c
  let genislik = Math.floor(d / grup)
  if (genislik % 2 == 0) {
    genislik++
  }
  console.log('genislik', genislik)
  let sonuc = []
  let sayac = 0
  let j = 0
  for (let i = 0; i < data.length; i++) {
    if (a[i] == a[j] + genislik) {
      sonuc.push(sayac)
      console.log('a[i]', a[i], 'a[j]', a[j], 'sonuc', sonuc)
      j = i
    } else {
      sayac++
    }
  }
  console.log('sonuc.toString()', sonuc.toString())
  console.log('sonuc.', sonuc)
  return sonuc.toString()
}
