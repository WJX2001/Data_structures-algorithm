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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null){
        return new TreeNode(val)
    } 

    if(root.val < val) {
        root.right = insertIntoBST(root.right,val)
    }else {
        // 假设插的是5，当遍历到7的时候，应该把5插入到7的左侧，但此时7的左节点为空
        // 所以，就走到了第一个if分支，并且让7的左节点去接受
        root.left = insertIntoBST(root.left,val)
    }
    return root
};