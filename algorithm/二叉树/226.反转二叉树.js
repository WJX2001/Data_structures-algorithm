// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

// 思路一：遍历的思想，通过二叉树的遍历，在前序位置进行节点交换
var invertTree = function (root) {
    
    // 二叉树遍历函数
    function traverse(root){
        if(root === null){
            return 
        }

        // 前序位置处
        let tmp = root.left
        root.left = root.right
        root.right = tmp

        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)
    return root
}

// 思路二：分解的思想处理
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