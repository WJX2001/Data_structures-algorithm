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
var longestUnivaluePath = function(root) {
  let res = 0
  if(root === null) {
      return 0
  }
  const maxLen = function(root,parentVal) {
      if(root === null) {
          return 0
      }
      // 利用函数定义，计算左右子树值为root.val 的最长树枝长度
      let leftLen = maxLen(root.left,root.val)
      let rightLen = maxLen(root.right,root.val)

      // 后序遍历位置顺便更新全局变量
      // 同值路径就是左右同值树枝长度之和
      res = Math.max(res,leftLen+rightLen)

      // 如果 root 本身和上级值不同，那么整棵子树都不可能有同值树枝
      if(root.val != parentVal){
          return 0
      }

      return 1+ Math.max(leftLen,rightLen)
  }
  maxLen(root,root.val)
  return res
};