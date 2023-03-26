function toThousands(num) {
    var res = ""
    num = (num || 0).toString()
    let count = 0
    for(var i=num.length-1;i>=0;i--) {
        count++
        res = num.charAt(i)+res
        if(!(count%3) && i!=0){
            res = ',' +res
        }
    }
    return res

}
console.log(toThousands(42371582378423))  // 42,371,582,378,423

