console.log("Merhaba Kodlama.io")


//var anahtarının yerine let i kullanıyoruz.
//var key i blok içinide görüyor...
let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)

const euroDun =11.2
//euroDun = 11 // bunu yapamıyoruz.
console.log(euroDun)
//camelCasing değişken tanımlama
//PascalCasing
//array - diziler
let konutKredileri = ["Konut kredisi","Emlak Konut kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)