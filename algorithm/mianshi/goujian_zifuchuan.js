
/**
 * 实现函数使得将str字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）
   类似于模版字符串，但有一点出入，实际上原理大差不差
 */

var a = {
  b: 123,
  c: '456',
  e: '789',
}
var str = `a{a.b}aa{a.c}aa {a.d}aaaa`;  // => 'a123aa456aa {a.d}aaaa'

function func(str, obj) {

  let res = ''
  let start = 0
  let length = str.length
  let flag = false
  for(let i=0;i<length;i++) {
    if(str[i] === '{'){
      start  = i+1
      flag = true
      continue;
    }
    if(!flag) {
      res += str[i]
    } else {
      if(str[i] === '}') {
        let curStr = str.slice(start,i)
        let r = match(curStr,obj)
        res +=r
        flag = false
        
      }
    }

  }
  return res
}

function match(str,obj) {
  let curArr = str.split('.').slice(1)
  let o = obj
  while(curArr.length) {
    let shiftOne = curArr.shift()
    if(!o[shiftOne]) {
      return `{${str}}`
    } else  {
      o = o[shiftOne]
    }
  }
  return o
}
  
console.log(func(str, a))