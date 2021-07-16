const directions = [[-1,0], // Up
                    [0,1], // Right
                    [1,0], // Down
                    [0,-1] // Left
                    ]


                    
const traversalBFS = function (matrix){
    const seen = new Array (matrix.length).fill(0).map(()=> new Array(matrix[0].length).fill(false))
    const values = []
    const queue = [[0,0]]

    while (queue.length) {
        const currPos = queue.shift()
        const row = currPos[0]
        const col = currPos[1]
        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]){
            continue
        }

        seen[row][col] = true
        values.push(matrix[row][col])
        for(let i = 0; i < directions.length; i++) {
            const currDir = directions[i]
            queue.push([row+currDir[0], col+currDir[1]])
        }

    }
    return values
}

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]]

console.log(traversalBFS(matrix))