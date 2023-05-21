
// 二叉树的序列化
var serialize = function(root) {
    if(!root ) {
        return '#,'
    }
    return root.val + ',' +serialize(root.left)+serialize(root.right)
};

// 二叉树的反序列化
var deserialize = function(data) {
    // 把字符串转化为节点列表
    var nodes = data.split(',')
    var dfs = function() {
        var value = nodes.shift(); // 当前字符串对应的节点
        if(value === '#') { // 遇到空节点，返回 null
            return null;
        }
        var node = new TreeNode(value); // 创建当前节点
        node.left = dfs(); // 递归构造左子树
        node.right = dfs(); // 递归构造右子树
        return node;
    };
    return dfs() // 从根节点开始构造二叉树
};
