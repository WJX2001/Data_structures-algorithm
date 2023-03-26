// 二叉树的直径
// 所谓二叉树的直径，就是左右子树的最大深度之和，对每个节点计算左右子树的最大高度
// 得出每个节点的直径，从而得出最大的那个直径
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    const maxDepth = (root) => {
        if(root === null){
            return 0
        }
        let leftMax = maxDepth(root.left)
        let rightMax = maxDepth(root.right)
        // 后序遍历位置顺便计算最大直径
        maxDiameter = Math.max(maxDiameter,leftMax+rightMax)
        // 向上层返回，要加上当前的最后一层，所以+1
        return 1+Math.max(leftMax,rightMax)
    }
    maxDepth(root)
    return maxDiameter
}