var convertBST = function(root) {
    // 记录累加和
    let sum = 0
    // 中序遍历节点
    const traverse = function(node) {
        if(!node) {
            return 
        }
        traverse(node.right) //先遍历右子树
        sum+=node.val  // 维护累加和
        node.val = sum  // 将BST节点的值更新为累加和
        traverse(node.left)  // 遍历左子树
    }
    traverse(root)
    return root
};