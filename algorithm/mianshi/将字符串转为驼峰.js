function capitalize(str) {
    
    if (str.startsWith("-")) {
        str = str.substr(1);
      }
    let words = str.split("-");
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > 0 ) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    return words.join("");
  }
  
  console.log(capitalize("-webkit-border-image")); // 输出: "webkitBorderImage"
  console.log(capitalize("font-size")); // 输出: "fontSize"