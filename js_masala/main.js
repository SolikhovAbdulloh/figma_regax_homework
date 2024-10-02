// let passwords = 'Absd1234'

// password(passwords)

// function password(passwords){

//     const regEx = /^[A-Z a-z 0-9]{8,}$/

//     const result = regEx.test(passwords)

//     console.log(result);
// }

// [(\+\.]?(998)[)]?[-\.\ ]?(\d{2})[-](\d{3})[-](\d{2})[-](\d{2}) bu tel raqam tekshirish kodi (998) 90-990-95-81

// let str = "Solikhov Asad";

// const regEx = RegExp(/\a/g);

// console.log(str.replace(regEx, "b"));  bu reduce orqali harfni almashtirish

// //1-masala

// const email = '@gmail'  // true holat

// const regEx = /^[a-z@]{6}$/

// const result = regEx.test(email)

// console.log(result);

//2-masala

// const tel = '+998 90 990-95-81'

// const regEx =(/^\d{5}|-\d{3}|-\d{2}|$ ,+$1-$2-$3-$4/)

// let result = regEx.test(tel)

// console.log(result);

// 3-masala

// let vaqt = '24:42'

// const regEx = /^[01]\d|2[0-3]:([0-5]\d)$/

// let result = regEx.test(vaqt)
// console.log(result);

//4-masala

//  let url = "https://www.fifa.com"

// const regEx = /^(\D{5})[:]?[\/][\/](\D{3})[.](\D{3,})|(\d{1,})?[.](com)$/g;

// let result = regEx.test(url)

// console.log(result);

// 5-masala

// const Ipadresss = '[192.168.0.1]'

// const regEx = /[\(]?(\d{3})[.,]?(\d{3})[.](\d{1,4})[.]?(\d{1,4})?\)?/g;

// let result = regEx.test(Ipadresss)

// console.log(result);

// 6-masala

// let pasport = 'AB0123456'

// const regEx = /^A[A-Z]?(\d{7})$/g;

// let result = regEx.test(pasport)

// console.log(result);

// 7-masala tushunmadm

// 8-masala

// let name = "Apple701"

// const regEx = /[a-zA-Z0-9]/g;

// let result = regEx.test(name)

// console.log(result);

// 9-masala

// let number = "1234Absdad44";

// console.log(number.match(/[0-9]/g));

//10-masala

// let year = '2014-yil'

// console.log(year.match(/[\d{4}]/g));

// 11-masala

// let alpha = 'AbSdFgHj'

// console.log(alpha.match(/[a-zA-z]/g));

// 12-masala

