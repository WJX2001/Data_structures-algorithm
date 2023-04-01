var levelOrderBottom = function(root) {
    let res = []
    if(root === null){
        return res
    }
    let q =[]
    q.push(root)
    while(q.length >0){
        let level = []
        let sz = q.length

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
        res.unshift(level)
    }
    return res
}
    