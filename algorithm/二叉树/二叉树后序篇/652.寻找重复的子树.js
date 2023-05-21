var findDuplicateSubtrees = function(root) {
    // 记录所有子树以及出现的次数
    const memo = new Map()
    // 记录重复的子树根节点
    const res = []

    // 主函数
    const traverse = function (root) {
        if(root == null) {
            return '#'
        } 
        const left = traverse(root.left)
        const right = traverse(root.right)
        // 后序位置
        // 构建当前子树表示字符串 由左子树、右子树和根节点的值组成 用','分割
        const subTree = left+','+right+','+root.val

        // 获取当前子树字符串在memo中的出现次数
        const freq = memo.get(subTree) || 0
        // 多次重复也只会被加入结果集一次
        if(freq === 1) {
            res.push(root)
        }

        // 给当前子树对应的出现次数+1
        memo.set(subTree,freq+1)
        return subTree

    }
    traverse(root)
    return res
};