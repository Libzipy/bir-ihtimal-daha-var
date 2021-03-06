/* localstorage'a daha data eklendi 'se bunu localstorage'a ekliyoruz ve
uygulamayi tekrardan kullanici geri dondugunde bu datayi alip initial state'e koyuyoruz
gelen datayi kaydettigimiz datayi cekip initial state yerlestiriyoruz */

const dataFromStorage = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
const paramFromStorage = localStorage.getItem('param')
  ? JSON.parse(localStorage.getItem('param'))
  : []
const optionFromStorage = localStorage.getItem('option')
  ? JSON.parse(localStorage.getItem('option'))
  : []

//  Uygulama ilk calistiginda baslangic state'i
export const initialState = {
  viewData: { data: dataFromStorage },
  viewOption: { option: optionFromStorage },
  viewParam: { param: paramFromStorage }
}
