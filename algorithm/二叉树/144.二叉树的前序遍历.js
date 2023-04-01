// 实现二叉树的前序遍历

var preorderTraversal = function (root) {
    let res = []
    function reverse(root){
        if(root === null){
            return 
        }
        // 前序位置
        res.push(root.val)
        reverse(root.left)
        reverse(root.right)
    } 
    reverse(root)
    return res
}