// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。
// 你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
// 返回合并后的二叉树。
// 注意: 合并过程必须从两个树的根节点开始。

var mergeTrees = function(root1, root2) {
    // TODO: 此种判断包含两种情况
    /**
     * 1) root1和root2都为空，则返回root2，此时也相当于返回空
     * 2) root1为空，root2不为空，测试返回root2,相当于将root2嫁接到了root1上
     */
    if(root1 === null){
        return root2
    }
    if(root2 === null) {
        return root1
    }
    
    // 两棵树都有的节点，叠加节点值
    root1.val +=root2.val
    // 递归合并左右子树
    root1.left = mergeTrees(root1.left,root2.left)
    root1.right = mergeTrees(root1.right,root2.right)

    return root1
};