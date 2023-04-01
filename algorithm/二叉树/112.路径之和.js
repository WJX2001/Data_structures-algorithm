// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。

var hasPathSum = function(root, targetSum) {
    let curSum = 0
    let bound = false

    function traverse(root){
        if(root === null) {
            return 
        }

        // 前序位置
        curSum+=root.val
        if(root.left === null && root.right === null && curSum === targetSum){
            bound = true
        }
        traverse(root.left)
        traverse(root.right)

        // 后序位置
        curSum -=root.val
    }
    traverse(root)
    return bound
}


// 思路二：分解的方式进行处理
// 先反转左右子树，然后反转左右子节点

var invertTree2 = function(root){
    var invert = function(root){
        if(root === null) {
            return null
        }

        // 先反转左右子树
        var left = invert(root.left)
        var right = invert(root.right)

        // 然后交换左右子节点
        root.left = right
        root.right = left

        // 以root为根的这棵二叉树已经被翻转
        return root
    }
    return invert(root)
}
