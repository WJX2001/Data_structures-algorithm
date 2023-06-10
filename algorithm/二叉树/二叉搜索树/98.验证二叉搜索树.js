var isValidBST = function(root) {
  return helper(root,null,null)
};


var helper = function(root,min,max) {
  // base case
  if(root === null) return true
  // 若 root.val 不符合max和min的限制，说明不是合法BST
  if(min !== null && root.val <= min.val) return false
  if(max !== null && root.val >= max.val) return false
  // 限定左子树的最大值是root.val 右子树的最大值是root.val
  return helper(root.left,min,root) && helper(root.right,root,max)
}