// 二叉树的最大深度
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
 * @return {number}
 */

function maxDepth(root) {
    let depth = 0;
    let res = 0;

    function traverse(root) {
    if (root === null) {
      return;
    }
    // 前序遍历位置
    depth++;
    // 遍历的过程中记录最大深度
    res = Math.max(res, depth);
    traverse(root.left);
    traverse(root.right);
    // 后序遍历位置
    depth--;
    return res
  }
    traverse(root)
    return res
}