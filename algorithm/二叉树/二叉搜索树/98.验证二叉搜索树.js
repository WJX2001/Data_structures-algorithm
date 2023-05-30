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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return helper(root,null,null)
};
// BST左小右大的特性是指root.val 要比左子树的所有结点都打，要比右子树的所有节点小

// 限定以root为根的子树节点必须满足 max.val > root.val > min.val

var helper = function(root,min,max) {
  // base case 
  if(root == null) return true
  // 如果root.val 不符合max 和 min的限制，说明不是合法的BST
  if(min != null && root.val <= min.val) return false
  if(max != null && root.val >= max.val) return false
  // 限定左子树的最大值是root.val 右子树的最小值是root.val
  return helper(root.left,min,root) && helper(root.right,root,max)
}