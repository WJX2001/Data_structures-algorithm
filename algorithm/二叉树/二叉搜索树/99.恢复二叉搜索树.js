

var recoverTree = function(root) {
  let first = null,second = null
  // 判断中序遍历的有序性
  let prev = new TreeNode(Number.MIN_SAFE_INTEGER) // 最小安全数

  const inorderTraverse = (root) => {
    if(root === null) {
      return 
    }

    inorderTraverse(root.left)

    // 中序遍历代码位置，找出那两个节点
    if(root.val < prev.val) {
      // root 不符合有序性
      if(first === null) {
        // 第一个错误节点是prev
        first = prev
      }
      // 第二个错误节点是 root
      second = root
    }
    prev = root
    inorderTraverse(root.right)
  }
  inorderTraverse(root)

  // 进行节点交换
  let temp = first.val 
  first.val = second.val
  second.val = temp

}