// 给定二叉树的根节点，返回所有左叶子之和
// 就是左边的叶子节点的和,必须是叶子节点
var sumOfLeftLeaves = function(root) {
    let sum = 0
    var traverse = function(root){
        if(root === null){
            return 
        }

        if( root.left !== null && root.left.left===null && root.left.right === null){
            sum += root.left.val
        }
        traverse(root.left)
        traverse(root.right)

    }
    traverse(root)
    return sum
}
