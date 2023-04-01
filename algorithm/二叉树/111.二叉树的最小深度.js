var minDepth = function(root) {
    var res = Infinity
    var depth = 0
    if(root === null){
        return 0
    }
    var traverse = function(root){
        if(root === null){
            return 
        }
        // 前序位置
        depth++
        if(root.left === null && root.right === null){
            res = Math.min(depth,res)
        }
        
        traverse(root.left)
        traverse(root.right)
        // 后序位置
        depth--

    }
    traverse(root)
    return res
}