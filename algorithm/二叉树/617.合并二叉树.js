
var mergeTrees = function(root1, root2) {
    if(root1 === null) {
        return root2
    }
    if(root2 === null){
        return root1
    }

    // 前序位置
    root1.val +=root2.val
    // 要想递归的改变二叉树，就需要：调用谁，就用谁接收
    /**
        例如树1的3节点，将3的左节点和右节点放入函数，用5和null 放入,所以返
        回5，所以3的左节点为5
     */
    root1.left =  mergeTrees(root1.left,root2.left)
    root1.right = mergeTrees(root1.right,root2.right)
    
    return root1
};