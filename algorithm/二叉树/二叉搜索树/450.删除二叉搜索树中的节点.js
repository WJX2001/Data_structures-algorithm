var deleteNode = function(root, key) {
  if(root == null) return null
  if(root.val == key) {
      // 情况一：A恰好是末端节点，两个子节点都为空，那么可以把它本身去掉
      // 情况二：A为末端节点，且只有一个非空子节点，那么他要让这个孩子接替自己

      // TODO: 将情况一、二全部处理掉
      if(root.left == null) return root.right
      if(root.right == null) return root.left
      
      // 情况三：A有两个子节点，为了不破坏BST的性质，A必须找到左子树中最大的那个节点或者
      //        右子树最大的节点来接替自己（这里采用的是用右子树最小节点来替换）
      
      // TODO: 处理情况三
      // 获得右子树最小的节点替换root节点
      let minNode = getMin(root.right)

      // 删除右子树的最小的节点
      root.right = deleteNode(root.right,minNode.val)

      // 用右子树最小的节点替换root节点
      minNode.left = root.left
      minNode.right = root.right
      root = minNode
    }  else if(root.val > key) {
      // 去左子树去寻找
      root.left = deleteNode(root.left,key)
    } else if(root.val < key) {
      // 去右子树去寻找
      root.right = deleteNode(root.right,key)
    }
    return root
};


// 获得最小值
var getMin = function(node) {
  // BST 中 最多边的就是最小的
  while(node.left !== null) {
    node = node.left
  }
  return node
}