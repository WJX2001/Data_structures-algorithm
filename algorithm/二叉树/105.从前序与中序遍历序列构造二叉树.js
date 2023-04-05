    /**
    * Definition for a binary tree node.
    * function TreeNode(val, left, right) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.left = (left===undefined ? null : left)
    *     this.right = (right===undefined ? null : right)
    * }
    */
    /**
    * @param {number[]} preorder
    * @param {number[]} inorder
    * @return {TreeNode}
    */
    var buildTree = function (preorder, inorder) {
        for (let i = 0; i < inorder.length; i++) {
            valToIndex.set(inorder[i], i)
        }
        return build(
            preorder,
            0,
            preorder.length - 1,
            inorder,
            0,
            inorder.length - 1
        );
    };

    /**
        存储inorder中值到索引的映射
    */

    let valToIndex = new Map()

    /**
    定义：前序遍历数组为preorder[preStart...preEnd]
    中序遍历数组为 inorder[inStart..inEnd]
    构造这个二叉树并返回该二叉树的根节点
    */

    function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
        if (preStart > preEnd) {
            return null
        }

        // root 节点对应的值就是前序遍历数组的第一个元素
        const rootVal = preorder[preStart];
        // rootVal 在中序遍历数组中的索引
        const index = valToIndex.get(rootVal)
        // 前序遍历中，左子树的大小
        const leftSize = index - inStart
        // 先构造出当前根节点
        const root = new TreeNode(rootVal)

        // 递归构造左右子树
        root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1)
        root.right = build(preorder, preStart + 1 + leftSize, preEnd, inorder, index + 1, inEnd)
        return root
    }


