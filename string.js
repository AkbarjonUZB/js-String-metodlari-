 
///// 1-ning yechmi-----------------------------------------------------------

// let x = prompt("soz ni kirgazing" ,"")

// let text1 = prompt("qidirilayotgan sozni kirgazing" ,"")
// let text2 = prompt("qidirilayotgan sozni kirgazing" ,"")


// let l = x.toLocaleUpperCase()
// let indx1 = l.indexOf(text1)
// let indx2 = l.indexOf(text2)

// if(indx1 !== -1 ){
//    console.log(` Qidirilayotgan soz => "${text1}" sozning indeksi =>  "${indx} -shu" `);
// }else if(indx2 !== -1){
//    console.log(` Qidirilayotgan soz => "${text2}" sozning indeksi =>  "${indx2} -shu" `);
// } else{
//    console.log(`"${qidirilayotgaSoz}" so'zi topilmadi`);
// }

///// 1-ning yechmi----------------------------------------------------------



//     2. prompt da katta text kiritiladi, ichida nechta so'z borligini topilsin va alertga chiqarilsin.


// let  kattaMatn = prompt( " matn kiriting" ," ");

// let kattatext = kattaMatn.toLocaleUpperCase()

// let topilganSozlar = kattatext.match(/[A-Z]/gi  );


// if (topilganSozlar) {
//     alert(`Matnda ${topilganSozlar.length} ta so'z bor:\n ${topilganSozlar}`);
// } else {
//     alert("Matnda hech qanday so'z topilmadi.");
// }



// 3. prompt orqali foydalanuvchi xabar qoldiradi, agar u xabarni ichida "yomon gap" bo'lsa uni o'zini "yaxshi gap" bilan o'zgartirib qo'yadi.


// let  yomongap = prompt( " Habar qoldiring ");
// let yangiGap = yomongap.replace('yomon gap'," aqilli gap boldi")
// alert(yangiGap)


// 4. prompt orqali xabar kiritilganidan so'ng bu xabar ichida necha marta "demak" so'zi ishlatilganligi aniqlab beruvchi dastur tuzing.

// let  yomongap = prompt( " Habar qoldiring ");
// let  yomongap =  " Habar qoldiring demak  yrmak demak semak demak ";//// ikki siniyam ishlatish mumkun

// let demakniTopish = yomongap.match(/demak/g);

// console.log(` demakdan ${demakniTopish.length } => ${demakniTopish}`);


// 5. [soffstudy@gmail.com](mailto:soffstudy@gmail.com), foydalanuchi biror bir elektron pochta kiritganidan so'ng. Bu elektron pochtaninig boshidan "@" gacha bo'lgan so'zini ajratib olib beruvchi dastur tuzilsin!
//     m-u:
//     [soffstudy@gmail.com](mailto:soffstudy@gmail.com) => soffstudy
//     [zufarbekseg@mail.ru](mailto:zufarbekseg@mail.ru) => zufarbekseg
   //  [Hamidullo007@gmail.com](mailto:Hamidullo007@gmail.com) => Hamidullo007

   // let pochta = prompt("Email Pochranizni kirgazing (@) bolishi shart","")
   // let y = pochta.indexOf("@")

   // alert(pochta.slice(0,y))





   // 6. Foydalanuchi biror bir elektron pochta kiritganidan so'ng. Bu elektron pochtaning so'ngi sayt extension/ni chiqarib bersin
   //     m-u:
   //     [soffstudy@gmail.com](mailto:soffstudy@gmail.com) => com
   //     [zufarbekseg@mail.ru](mailto:zufarbekseg@mail.ru) => ru
   //     [Hamidullo007@apple.org](mailto:Hamidullo007@apple.org) => org




   // let pochta = prompt("Email Pochranizni kirgazing (@) bolishi shart","")
   // let y = pochta.indexOf(".")

   // alert(pochta.slice(y,pochta.length))



















// console.log(x.startsWith('Asa')); // shu soz bilan boshlanganmi  // true
// console.log(x.startsWith('as'));  //false
// console.log(x.endsWith('as'));  // Shu sozbilan tugagnmi
// console.log(x.endsWith('kum'));  // true
// console.log(x[5]);  // m
// console.log(x[6]);  // a indeksdagi harfni chiqaradi => []
// console.log(x.);  // true

// console.log(x.length); //12
// console.log(x[6]); // a
// console.log(x.charAt(0)); //A
// console.log(x.charCodeAt(0));  // 65
// console.log(x.indexOf("m"));  //  5
// console.log(x.toLocaleLowerCase());  // asalomalekum
// console.log(x.toLocaleUpperCase()); //  ASALOMALEKUM
// console.log(x.slice(1,9)); //  salomale
// console.log(x.substring(-1,6));  //  Asalom
// console.log(x.concat(' Akbarjon'));  //  Asalomalekum Akbarjon
// console.log(x.includes('salom'));  //  true
// console.log(x.substring(-1,6));  //  salomale
// console.log(x.replace('js','dev'));  // Asalomalekum
// console.log(x.replaceAll('as', 'um'));




