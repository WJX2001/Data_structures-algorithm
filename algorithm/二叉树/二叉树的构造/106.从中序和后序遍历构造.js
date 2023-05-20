


var buildTree = function (inorder, postorder) {
    // 存储 inorder 中值到索引的映射
    const valToIndex = new Map();
    for (let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }
    return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, valToIndex);
};
function build(inorder, inStart, inEnd, postorder, postStart, postEnd, valToIndex) {
    if (inStart > inEnd) {
        return null;
    }
    // root 节点对应的值就是后序遍历数组的最后一个元素
    const rootVal = postorder[postEnd];
    // rootVal 在中序遍历数组中的索引
    const index = valToIndex.get(rootVal);
    // 左子树的节点个数
    const leftSize = index - inStart;
    const root = new TreeNode(rootVal);



    // 递归构造左右子树
    root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1, valToIndex);
    root.right = build(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1, valToIndex);
    return root;
}