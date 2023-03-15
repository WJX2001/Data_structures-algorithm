// 二叉树的直径
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

// 暴力解法
// 记录最大直径的长度
var diameterOfBinaryTree = function (root) {
    var maxDiameter = 0;
    // 对每个节点计算直径，求最大直径
    traverse(root);
    return maxDiameter;


    // 遍历二叉树
    function traverse(root) {
        if (root === null) {
            return;
        }
        // 对每个节点计算直径
        let leftMax = maxDepth(root.left);
        let rightMax = maxDepth(root.right);
        let myDiameter = leftMax + rightMax;
        // 更新全局最大直径
        maxDiameter = Math.max(maxDiameter, myDiameter);

        traverse(root.left);
        traverse(root.right);
    }

    // 计算二叉树的最大深度
    function maxDepth(root) {
        if (root === null) {
            return 0;
        }
        let leftMax = maxDepth(root.left);
        let rightMax = maxDepth(root.right);
        return 1 + Math.max(leftMax, rightMax);
    }
};

/**
 * 此解法虽然正确，但是运行时间很长，因为traverse 遍历每个节点的时候还会调用递归函数 maxDepth，
 * 而 maxDepth 是要遍历子树的所有节点的，所以最坏时间复杂度是 O(N^2)。
 * 这就出现了刚才探讨的情况，前序位置无法获取子树信息，所以只能让每个节点调用 maxDepth 函数去算子树的深度。
 */


/************************************************************ */


/**
 * 那如何优化？我们应该把计算「直径」的逻辑放在后序位置，准确说应该是放在 maxDepth 的后序位置，
 * 因为 maxDepth 的后序位置是知道左右子树的最大深度的。
 */

/**
 * 记录最大直径的长度
 */

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    const maxDepth = function(root){
        if(root === null){
            return 0
        }
        let leftMax = maxDepth(root.left)
        let rightMax = maxDepth(root.right)
        // 后序遍历位置顺便计算最大直径
        maxDiameter = Math.max(maxDiameter,leftMax+rightMax)
        return 1 + Math.max(leftMax,rightMax);
    }
    maxDepth(root)
    return maxDiameter
}