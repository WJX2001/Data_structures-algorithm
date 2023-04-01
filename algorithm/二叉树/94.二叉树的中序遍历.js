var inorderTraversal = function(root) {
    
    let res = []
    function reverse(root){
        if(root === null){
            return 
        }
        reverse(root.left)
        // 中序位置
        res.push(root.val)
        reverse(root.right)
    }
    reverse(root)
    return res
};