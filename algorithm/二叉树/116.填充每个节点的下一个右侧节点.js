var connect = function (root) {
    // 入口处边界判断
    if(root === null) {
        return null
    }
    // 进行循环
    traverse(root.left,root.right)
    return root
}


var traverse = function(node1,node2){
    // 边界判断
    if(node1 === null || node2 === null){
        return
    }
    // 前序位置 将传入的两个子节点串起来
    node1.next = node2
    // 连接相同父节点的两个子节点
    traverse(node1.left,node1.right)
    traverse(node2.left,node2.right)
    // 跨越父节点连接两个子节点
    traverse(node1.right,node2.left)
}