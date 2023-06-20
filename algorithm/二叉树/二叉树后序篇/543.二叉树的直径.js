var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0
  // base case
  const maxDepth = (root) => {
      if(root === null) {
          return 0
      }
      let leftMax = maxDepth(root.left)
      let rightMax = maxDepth(root.right)

      // 后序遍历位置顺便计算最大直径
      maxDiameter = Math.max(maxDiameter,leftMax+rightMax);
      return 1+ Math.max(leftMax,rightMax)
  }
  maxDepth(root)
  return maxDiameter
  
};