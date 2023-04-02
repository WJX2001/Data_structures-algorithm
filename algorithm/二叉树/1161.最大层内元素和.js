var maxLevelSum = function (root) {
    // 最终结果的层数
    let res = []
    if(root === null) return res

    // 最大值
    let maxSum = -Infinity

    let q = []
    q.push(root)
    let depth = 1

    while(q.length>0){
        let sz = q.length

        let levelMax = 0
        for(let i=0;i<sz;i++){
            let cur = q.shift()
            levelMax +=cur.val

            if(cur.left){
                q.push(cur.left)
            }
            if(cur.right){
                q.push(cur.right)
            }
        }
        if(levelMax > maxSum){
            maxSum = levelMax
            res = depth
        }
        depth++
    }
    return res
}