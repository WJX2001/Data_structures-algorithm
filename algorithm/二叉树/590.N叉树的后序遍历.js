var postorder = function (root) {
    var res = [];

    var traverse = function (root) {
        if (root === null) {
            return;
        }
        // 前序遍历位置
        for (var i = 0; i < root.children.length; i++) {
            traverse(root.children[i]);
        }
        // 后序遍历位置
        res.push(root.val);
    };

    traverse(root);
    return res;
};