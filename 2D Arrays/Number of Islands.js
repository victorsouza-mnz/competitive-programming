//https://leetcode.com/problems/number-of-islands/


const dir = [[-1,0],
             [0,1],
             [1,0],
             [0,-1]
            ]

var numIslands = function(grid) {
    if (grid.length === 0) return 0
    let resp = 0
    for(let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++ ) {
            if (grid[row][col] === "1"){
                resp++
                grid[row][col] = "0"
                const queue = []
                queue.push([row,col])
                while (queue.length){
                    const currentPos = queue.shift()
                    const currentRow = currentPos[0]
                    const currentCol = currentPos[1]

                    for (let i = 0; i< dir.length; i++){
                        const currentDir = dir[i]
                        const nextRow = currentRow+currentDir[0]
                        const nextCol = currentCol+currentDir[1]
                        if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length){
                            continue;
                        }
                        if(grid[nextRow][nextCol] === "1") {
                            queue.push([nextRow,nextCol])
                            grid[nextRow][nextCol] = "0"
                        }

                    }
                }
            }
        }
    }
    return resp
};