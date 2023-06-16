var findSecondMinimumValue = function(root) {
  if(root.left === null && root.right === null){
      // 如果根节点没有左右子节点，表示这棵树只有一个节点，无第二小的值，返回-1
      return -1
  }
  let left = root.left.val 
  let right = root.right.val

  if(root.val === root.left.val){
      // 如果根节点的值等于左子节点的值，说明左子节点与根节点相同，需要进一步寻找左子树的第二小的值
      left = findSecondMinimumValue(root.left)
  }

  if(root.val === root.right.val) {
    right = findSecondMinimumValue(root.right)
  }

  if(left === -1) {
    // 如果左子树没有找到第二小的值，则返回右子树中的第二小的值
    return right
  }

  if(right === -1) {
    // 如果右子树没有找到第二小的值，则返回左子树中的第二小的值
    return left
  }

  return Math.min(left,right)
};