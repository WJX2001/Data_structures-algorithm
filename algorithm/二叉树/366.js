// 寻找二叉树的叶子节点
// 这题需要把二叉树的高度理解成从叶子节点到根节点从下到上递增的，那么可以把相同高度的节点分到一起就是答案

// 首先计算二叉树的最大高度，然后再函数的后序遍历位置就可以获取当前节点距离叶子节点的高度
var findLeaves = function(root) {
    var res = [];
    
    var maxDepth = function(root) {
        if (root === null) {
            return 0;
        }
        // 当前节点距离叶子节点的高度（最大深度）
        var h = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        // 后序遍历位置
        if (res.length < h) {
            res.push([]);
        }
        // 把所有相同高度的叶子节点放在一起
        res[h - 1].push(root.val);
        return h;
    }
    
    maxDepth(root);
    return res;
};
findLeaves([1,2,3,4,5])