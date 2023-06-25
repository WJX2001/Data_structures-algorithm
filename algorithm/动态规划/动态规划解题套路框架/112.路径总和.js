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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  var found = false
  var curSum = 0

  function traverse(root) {
      if(root === null) {
          return 
      }
      // 前序遍历位置
      curSum += root.val
      if(root.left === null && root.right === null && curSum === targetSum) {
          found = true
      }
      traverse(root.left)
      traverse(root.right)

      // 后序遍历位置
      curSum -= root.val11
  }
  traverse(root)
  return found
};