// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    // 存储 postorder 中值到索引的映射
    const valToIndex = new Map();
    for (let i = 0; i < postorder.length; i++) {
        valToIndex.set(postorder[i], i);
    }
    return build(preorder, 0, preorder.length - 1,
                postorder, 0, postorder.length - 1, valToIndex);
};

 
function build(preorder, preStart, preEnd, postorder, postStart, postEnd, valToIndex) {
    if (preStart > preEnd) {
        return null;
    }
    if (preStart === preEnd) {
        return new TreeNode(preorder[preStart]);
    }

    // root 节点对应的值就是前序遍历数组的第一个元素
    const rootVal = preorder[preStart];
    // root.left 的值是前序遍历第二个元素
    // 通过前序和后序遍历构造二叉树的关键在于通过左子树的根节点
    // 确定 preorder 和 postorder 中左右子树的元素区间
    const leftRootVal = preorder[preStart + 1];
    // leftRootVal 在后序遍历数组中的索引
    const index = valToIndex.get(leftRootVal);
    // 左子树的元素个数
    const leftSize = index - postStart + 1;

    // 先构造出当前根节点
    const root = new TreeNode(rootVal);

    // 递归构造左右子树
    // 根据左子树的根节点索引和元素个数推导左右子树的索引边界
    root.left = build(preorder, preStart + 1, preStart + leftSize,
            postorder, postStart, index, valToIndex);
    root.right = build(preorder, preStart + leftSize + 1, preEnd,
            postorder, index + 1, postEnd - 1, valToIndex);

    return root;
}