// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，
// 请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    var res = 0
    var rank = 0

    function traverse (root,k) {
        if(root == null) {
            return 
        }
        traverse(root.left,k)
        // 中序遍历位置
        rank++
        if(k == rank) {
            res = root.val
            return 
        }
        traverse(root.right,k)
    }
    traverse(root,k)
    return res
};

