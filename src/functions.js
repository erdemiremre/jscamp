function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity)
    //bir sürü kod bloğu olduğunu düşün..
    //Elma default değer atamasıdır..

}
//undifend ile null'ı karıştırma!!!

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World!")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2()

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
let product2 = {productName:"Armut",quantity:35,unitPrice:25}

function addToCart3(product) {
    console.log("Ürün  : "+product.productName)
    console.log("Fiyat : "+product.unitPrice)
    console.log("Adet  : "+product.quantity)
}


addToCart3(product1)
addToCart3(product2)
//Not objeler arrayler referans tiplidir.sayılar değer tiplidir.

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
//console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

// function add(number1, number2) {
//     console.log(number1+number2)
// }

// function add2(number1, number2, number3) {
//     console.log(number1+number2+number3)
// }

function add(...numbers) { //rest operatörü ; gönderdiğimiz verileri array yapıp gönderiyor
    let total =0;
    for (let i = 0; i < numbers.length; i++) {
        total = total+numbers[i]
    }
    console.log(total)
}

// function add(bisey,...numbers) { //rest operatörü iki farklı parametre olduğunda sona yazılır.
//     let total =0;
//     for (let i = 0; i < numbers.length; i++) {
//         total = total+numbers[i]
//     }
//     console.log(total)
//     console.log(bisey)
// }

add(20,30)
add(20,40,50)
add(10,70,90,50)


let numbers = [30,10,500,700,400]
console.log(Math.max(...numbers)) //spet ayrıştırır...

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",popolation:"20M"},
    {name:"Marmara",popolation:"30M"},
    {name:"Karadeniz",popolation:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.popolation)
console.log(icAnadoluSehirleri)


let newProductName , newUnitPrice , newQuantity
({productName:newProductName, unitPrice:newUnitPrice ,quantity:newQuantity}
    = {productName:"Elma",unitPrice:10,quantity:5})

    console.log(newProductName)
    console.log(newUnitPrice)
    console.log(newQuantity)
