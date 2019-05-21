function getMiddle(kata){
    let arrkata = kata.split('')
    
    if(arrkata.length % 2 == 0){
        let arrtengah1 = (arrkata.length / 2) - 1
        let arrTengah2 = arrtengah1 + 1
        let hasil = arrkata[arrtengah1] + arrkata[arrTengah2]
        return hasil
    }else{
        let arrTengah = (Math.floor(arrkata.length / 2))
        let hasilGanjil = arrkata[arrTengah]
        return hasilGanjil
    }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))
