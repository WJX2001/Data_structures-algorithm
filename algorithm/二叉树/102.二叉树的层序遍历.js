var levelOrder = function(root) {
    let res = []
    if(root === null){
        return res
    }

    // 定义一个队列
    let q = []
    q.push(root)
    
    while(q.length >0){
        let sz = q.length
        
        // 记录这一层节点的值
        let level = []
        for(let i=0;i<sz;i++){
            let cur = q.shift()
            // 将这一层的元素加入level临时数组中
            level.push(cur.val)
            if(cur.left !== null){
                q.push(cur.left)
            }
            if(cur.right !== null){
                q.push(cur.right)
            }
        }
        res.push(level)
    }
    return res

}