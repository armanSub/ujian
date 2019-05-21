function accum(kata){
    let arrKata = kata.split('')
    let huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arrPrint = []
    let print = ''
    let printAkhir = ''
    for(i=0;i<arrKata.length;i++){
        for(y=0;y < huruf.length; y++){
            if(arrKata[i] == huruf[y]){
                for(let a = 0; a <= y; a++){
                    print += arrKata[i]
                }
                arrPrint.push(print)
            }
        }
    }
    for(let q = 0; q< arrPrint.length; q++){
        printAkhir += arrPrint[q]
        if(q != (arrPrint.length - 1))
        printAkhir += '-'
    }
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
