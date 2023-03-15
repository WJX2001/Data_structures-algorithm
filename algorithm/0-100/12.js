/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * I             1   
   V             5      IV -> 4
   X             10     IX -> 9
   L             50     XL -> 40
   C             100    XC -> 90
   D             500    CD -> 400
   M             1000   CM -> 900

   例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
   通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

   输入: num = 3
   输出: "III"

   输入: num = 4
   输出: "IV"

   输入: num = 58
   输出: "LVIII"
   解释: L = 50, V = 5, III = 3.
 * 
 */



var intToRoman = function(num) {
    const valueSymbols = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
    const roman = []
    for(const [value,symbol] of valueSymbols){
        /**
         * [ 1000, 'M' ]
           [ 900, 'CM' ]
           [ 500, 'D' ]
           [ 400, 'CD' ]
           [ 100, 'C' ]
           [ 90, 'XC' ]
           [ 50, 'L' ]
           [ 40, 'XL' ]
           [ 10, 'X' ]
           [ 9, 'IX' ]
         */
        while(num>=value) {  // 当传进来的数字大于或者等于数组的第0个数 那么与之相减，并传回symbol到数组中
            num -= value
            roman.push(symbol)
        }
        if(num == 0){
            break
        }
    }
    return roman.join('') // join() 方法用于把数组中的所有元素放入一个字符串。
                         // 例如 58 ['L','V','III'] 经过join后变成 LVIII

};