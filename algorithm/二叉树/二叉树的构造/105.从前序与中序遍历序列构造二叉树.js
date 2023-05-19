var buildTree = function (preorder, inorder) {

    // preorder 前序遍历    inorder 中序遍历
    // 存储 inorder中值 到索引的映射
    var valIndex = new Map()
    for(var i=0;i<inorder.length;i++) {
        valIndex.set(inorder[i],i)
    }

    var build = function (preorder, preStart, preEnd,inorder, inStart, inEnd) {
        if(preStart>preEnd){
            return null
        }
        // root 根节点对应的值就是前序遍历数组的第一个元素
        var rootVal = preorder[preStart];
        // 根节点在中序遍历数组中的位置
        var index = valIndex.get(rootVal)
        // 左子树的长度
        var leftSize = index - inStart
        // 构造出当前的根节点
        var root = new TreeNode(rootVal)

        //? 构造左子树
        root.left = build(preorder,preStart+1,preStart+leftSize,inorder,inStart,index-1)

        //? 构造右子树
        root.right = build(preorder,preStart+leftSize+1,preEnd,inorder,index+1,inEnd)
        return root
        
    }

    return build(preorder,0,preorder.length-1,inorder,0,inorder.length-1)
}