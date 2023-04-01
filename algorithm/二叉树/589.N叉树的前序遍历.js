var preorder = function(root) {
    var res = []

    function traverse(root){
        if(root === null){
            return 
        }
        // 前序遍历位置
        res.push(root.val)
        for(var i=0;i<root.children.length;i++){
            traverse(root.children[i])
        }
    }
    traverse(root)
    return res
};