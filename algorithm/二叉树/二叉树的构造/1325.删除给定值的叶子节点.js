// 给你一棵以 root 为根的二叉树和一个整数 target ，请你删除所有值为 target 的 叶子节点 。
// 注意，一旦删除值为 target 的叶子节点，它的父节点就可能变成叶子节点；
// 如果新叶子节点的值恰好也是 target ，那么这个节点也应该被删除。
// 也就是说，你需要重复此过程直到不能继续删除。

var removeLeafNodes = function(root, target) {
    // base case 
    if(root === null ) return null
    // 如果左右子节点需要被删除，先递归删除他们
    root.left = removeLeafNodes(root.left,target)
    root.right = removeLeafNodes(root.right,target)

    // 后序位置
    if(root.val === target && root.left=== null && root.right === null){
        return null
    }
    return root
};