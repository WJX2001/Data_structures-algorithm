// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var findLeaves = function(root) {
    var res = []
    var maxDepth = function(root) {
        if(root === null) {
            return 0
        }
        // 当前节点距离叶子节点的高度（最大深度）开始遍历
        let leftMax = maxDepth(root.left)
        let rightMax = maxDepth(root.right)
        var h = Math.max(leftMax,rightMax)+1
        // 后序遍历位置     
       if(res.length<h) {
           res.push([])
       }
       // 把所有相同高度的叶子节点放在一起
       res[h-1].push(root.val)
       return h
    }
    maxDepth(root)
    return res
 };