var maxDepth = function(root) {
    let res = 0
    let depth = 0
    var traverse = function(root){
        if(root === null){
            return 
        }
        // 前序位置
        depth++
        res = Math.max(depth,res)
        for(let i=0;i<root.children.length;i++){
            traverse(root.children[i])
        }
        // 后序遍历位置
        depth--
    }
    traverse(root)
    return res
};