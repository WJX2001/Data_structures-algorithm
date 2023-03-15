const url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu';
const url2 = 'http://hbos-section-dev.cfuture.shop:8000/?name=%E5%BC%A0%E4%B8%89&age=18&gender=%7B%22key%22%3A1%2C%22value%22%3A%22%E7%94%B7%22%7D&cardNo=医保1&cardNo=社保2&address=%E5%A4%A9%E5%BA%9C%E4%BA%8C%EF%BC%9F%E4%B8%89%E8%A1%97';
// console.log(url.split("?")[1].split("&"))
// console.log(decodeURIComponent(url))
const getURLParam = (url, key) => {
    // code here
    var params = {};
    url = decodeURIComponent(url) // 进行base64解码
    if(url.split("?").length<=1) {
        return ''
    }
    var arr = url.split("?")[1].split("&");
    console.log(arr)
    arr.forEach(function(item){
        params[item.split("=")[0]] = item.split("=")[1];
    })
    return key?params[key]:params
         
  }
  const param1 = getURLParam(url,'tn');
  console.log(param1)   // 输出baidu


const gender = getURLParam(url2, 'gender');
console.log(gender);  // {"key":1,"value":"男"}

const address = getURLParam(url2, 'address');
console.log(address);  // 天府二？三街