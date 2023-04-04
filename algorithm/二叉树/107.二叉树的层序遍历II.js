var levelOrderBottom = function(root) {
    let res = []
    if(root === null){
        return res
    }
    let q =[]
    q.push(root)
    while(q.length >0){
        // 记录这一层的节点值
        let level = []
        let sz = q.length
        // for 循环控制每一层从左向右遍历
        for(let i=0;i<sz;i++){
            let cur = q.shift()
            level.push(cur.val)

            if(cur.left !== null){
                q.push(cur.left)
            }
            if(cur.right !== null){
                q.push(cur.right)
            }
        }
        // 把每一层添加到头部，就是自底向上的层序遍历
        res.unshift(level)
    }
    return res
}
    