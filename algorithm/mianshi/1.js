const readline = require('readline');
process.stdin.setEncoding('utf-8');

let rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

let n,m;
let a = []
let q = []

rl.on('line', (input)=> {
  if(!n){
    [n,m] = input.trim().split(' ').map(Number)
  } else if(!a.length){
    a = input.trim().split(' ').map(Number)
  } else {
    q.push(Number(input))
  }
});

function findMax(n,a) {
    // 从大到小枚举巧克力板数量K
    for(let k=n;k>=1;k--){
        let sum = 0;
        // 计算巧克力板的面积
        for(let i=0;i<k;i++) {
            sum +=a[i] * a[i]
        }
        // 如果面积之和小于等于包的大小S，则找到了最大的k
        let S = Math.ceil(sum)
        if(sum <=S){
            return k;
        }
    }
    return 0
}

// 读取数据后，计算每个询问的答案
rl.on('close', ()=> {
    // 从大到小进行遍历巧克力板
    for(let i=0;i<m;i++) {
        const S = q[i]
        let k = n;
        let sum = a
    }
})