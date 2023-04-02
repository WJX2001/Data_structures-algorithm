var numIslands = function(grid) {
    var res = 0
    let m = grid.length,n = grid[0].length
    // 遍历grid
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            // 每次发现一个岛屿，岛屿数量+1
            if(grid[i][j] == '1'){
                // 每发现一个岛屿，数量+1
                res++
                // 然后使用dfs，将岛屿淹了
                dfs(grid,i,j)
            }
        }
    }
    return res
}



// 从(i,j)开始，将相邻的陆地都变成海水
function dfs(grid,i,j){
    // 边界判断
    let m = grid.length,n = grid[0].length
    if(i<0 || j<0 || i>=m || j>=n){
        return 
    }

    // 已经是水了，不用淹了
    if(grid[i][j] == '0'){
        return 
    }

    // 将（i,j）淹没
    grid[i][j] = '0'
    // 淹没周围
    dfs(grid,i+1,j)
    dfs(grid,i,j-1)
    dfs(grid,i-1,j)
    dfs(grid,i,j+1)
}