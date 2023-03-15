/**
 * 二叉树的前序遍历
 * 根节点 -- 左子树 -- 右子树
 * 
 */

/**
 * 方法一： 迭代方法 一直往下遍历 直到没有为止
 * 
 */

var preorderTraversal = function(root) {
    const res = []
    if(root === null) {
        return res
    }
    
    const order = (node) => {
        res.push(node.val)
        if(node.left !=null){
            order(node.left)
        }
        if(node.right != null){
            order(node.right)
        }
    }
    order(root)
    return res

};


/**
 * 方法二： 递归方法
 * 模拟一个栈
 */

var preorderTraversal = function(root) {
    const res = []
    if(root === null){
        return res
    }
    const stack = []
    stack.push(root)
    while(stack.length > 0){
        const current = stack.pop()
        res.push(current.val)
        if(current.right !== null){
            stack.push(current.right)
        }
        if(current.left !== null){
            stack.push(current.left)
        }
    }
    return res

};