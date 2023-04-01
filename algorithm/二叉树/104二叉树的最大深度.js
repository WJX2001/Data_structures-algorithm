// 二叉树的最大深度
var maxDepth = function (root) {
    let res = 0 
    let depth = 0
    var traverse = function(root){
        if(root === null) return;
        // 前序位置
        depth++
        // 遍历的过程中记录的最大深度
        res = Math.max(res,depth)
        traverse(root.left)
        traverse(root.right)
        // 后续遍历位置
        depth--
    }
    traverse(root)
    return res
}