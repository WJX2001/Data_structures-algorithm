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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  // 定义：输入一颗二叉树，返回的二叉树叶子节点都是1
  if(root == null) {
      return null
  }

  // 二叉树递归框架
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  // 后序遍历位置 判断自己是否为0的叶子节点
  if(root.val == 0 && root.left == null && root.right == null){
      return null
  }
  return root
};