//https://leetcode.com/problems/spiral-matrix/

const directions = [[0,1], // Right
                    [1,0], // Down
                    [0,-1], // Left       
                    [-1,0] //Up
                    ]


const spiralOrder = function (matrix) {
    const seen = new Array (matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false))
    const values = []
    dfs(matrix, 0,0, seen, values, 0)
    return values
}


const dfs = function (matrix, row, col, seen, values, dir) {
    
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return 
    values.push(matrix[row][col])
    seen[row][col] = true

    row = row + directions[dir][0]
    col = col + directions[dir][1]
    
    if (row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length && !(seen[row][col])) {
        dfs(matrix, row, col, seen, values, dir)
    } else { 
        row = row - directions[dir][0]
        col = col - directions[dir][1]
        dir = (dir+1)%4
        row = row + directions[dir][0]
        col = col + directions[dir][1]
        dfs(matrix, row, col ,seen, values, dir)
    }
    
}

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]]

console.log(traversalDFS(matrix))