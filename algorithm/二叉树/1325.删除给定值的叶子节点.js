var removeLeafNodes = function(root, target) {
    //  base case
    if(root === null)  return null

    // 如果左右子节点需要被删除，先递归删除他们
    // 调用root.left 就用root.left接收，这样才能达到递归修改的效果
    root.left = removeLeafNodes(root.left,target)
    root.right = removeLeafNodes(root.right,target)

    // 后序遍历位置,此时节点root知道自己是否需要被删除
    if(root.val === target && root.left === null && root.right === null){
        // 此时证明自己是个叶子节点，也得被删除
        return null
    }
    // 证明自己不是一个叶子节点，不用被删除
    return root
}