let url = "https://www.fifa.com"

const regEx = /(\D{5})[:]?[\/][\/](\D{3})[.](\D{3,})|(\d{1,})?[.](com)/g;

let result = regEx.test(url)

console.log(result);