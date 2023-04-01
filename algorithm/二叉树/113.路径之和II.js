var pathSum = function(root, targetSum) {
    let res = []
    let path = []
    function traverse(root,targetSum){
        let remain = targetSum - root.val

        if (root.left == null && root.right == null && remain == 0) {
            // 找到一条路径
            res.push([...path, root.val]); // 将路径列表和当前节点值合并成新的数组，添加到结果列表中
            return;
        }

        // 维护路径列表
       // 将当前节点加入路径列表

       path.push(root.val);
       traverse(root.left, remain);
       traverse(root.right, remain);
       // 从路径列表中弹出当前节点 后序位置
       path.pop();
    }
    traverse(root,targetSum);
    return res
}