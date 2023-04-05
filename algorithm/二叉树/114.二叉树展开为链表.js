/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // base case
    if(root === null) {
        return 
    }
    // 利用定义，把左右子树打平
    flatten(root.left)
    flatten(root.right)

    /**后序遍历位置 */
    // 保存当前左右子树的信息
    var left = root.left
    var right = root.right

    // 将左子树整个拿到右边，作为右子树
    root.left = null
    root.right = left

    // 将原先的右子树接到当前右子树的末端
    var p = root
    // 将指针从头遍历到，新旧右子树的交接处
    while(p.right !== null){
        p = p.right
    }
    p.right = right
    

};