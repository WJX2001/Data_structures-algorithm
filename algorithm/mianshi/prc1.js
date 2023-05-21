let stk = [];
let s = "cbacdcbc"
    // 维护一个计数器记录字符串中字符的数量
    // 因为输入为 ASCII 字符，大小 256 够用了
    let count = Array(256).fill(0);
    console.log(count)
    for (let i = 0; i < s.length; i++) {
        
        count[s.charCodeAt(i)]++;
        
        
        
    }
    console.log(count)

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        // 每遍历过一个字符，都将对应的计数减一
        count[c.charCodeAt(0)]--;
        
    }
    console.log(count)
    
   


    