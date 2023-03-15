/**
 * 二叉树的后序遍历
 */

/**
 * 
 * 方法一： 递归
 */
var postorderTraversal = function(root) {
    const res = []
    if(root === null){
        return res
    }
    const order = (node) => {
        if(node.left !==null){
            order(node.left)
        }
        if(node.right !==null){
            order(node.right)
        }
        res.push(node.val)
    }
    order(root)
    return res
};

/**
 * 迭代方法
 */

var postorderTraversal = function(root) {
    const res = []
    if(root === null){
        return res
    }
    const stack = []
    let temp = root
    while (temp !== null){
        stack.push(temp)
        temp = temp.left
    }
    let prev = null
    while(stack.length > 0){
        const top = stack[stack.length - 1]
        if(top.right === null || (top.right !== null || prev === top.right)){
            // 此时可以弹出栈中的元素
            prev = stack.pop()
            res.push(top.val)
        } else {
                let temp2 = top.right
                while (temp2 !== null) {
                    stack.push(temp2)
                    temp2 = temp2.left
                }
                 
            }
        }
        return res
    }
    
