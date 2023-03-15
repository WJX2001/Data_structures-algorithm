/**
 * 
 * 二叉树的中序遍历
输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 */


/** 
 * 方法一、递归思想
 * 二叉树的中序遍历： 左子树 -- 根节点 -- 右子树的方式
 * 先遍历左子树，直到左子树没东西了，遍历到头，然后处理根节点，最后再处理右子树
 *  inorder(root) 表示当前遍历到 root节点的答案
 * 时间复杂度o(n)
 */

var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return ; 
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};


/**
 * 方法二：迭代思想
 *  需要模拟一个栈，先遍历左子树，并且按照遍历顺序依次入栈，例如根节点先入栈
 *  按照栈的规则，先入栈的后弹出，所以根节点最后弹出，判断中间节点,如果根节点有右节点，那么继续遍历右节点的左子树
 *  时间复杂度为o(n)
 */


var inorderTraversal1 = function(root) {
    const res = []
    if(root === null){
        return res
    }
    const stack = []
    let temp = root
    while(temp != null){
        stack.push(temp)
        temp = temp.left
    }
    while(stack.length > 0){
        const current = stack.pop()
        res.push(current.val)
        if(current.right){
            let temp2 = current.right
            while(temp2 !== null){
                stack.push(temp2)
                temp2 = temp2.left
            }
        }
    }
    return res
}

