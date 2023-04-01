var levelOrder = function(root) {
    // 创建一个res来存储遍历
    let res = []
    if(root === null) return res

    let q = []
    q.push(root)

    while(q.length > 0){
        let sz = q.length
        let level = []
        for(let i=0;i<sz;i++) {
            let cur = q.shift()
            level.push(cur.val)

            // 将当前节点的所有子节点都加入q队列
            for(let child of cur.children){
                q.push(child)
            }
        }
        res.push(level)
    }
    return res
};