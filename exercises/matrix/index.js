// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],[4, 3]]
//   matrix(3)
//     [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],  0)1-4/1-4 1ere ligne)2-4/1-4 derniere colonne)2-4/1-3 derniere ligne2-3/1-3  premiere colonne)2-3/2-3 premiere ligne 3-3 /2-3 
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    results=Array.from({ length: n }, () => Array(n).fill(undefined));
    start_row=0;
    start_column=0;
    end_row=n-1;
    end_column=n-1;
    count=1;
    while(start_row<= end_row && start_column <=end_column){
        for(let i=start_column;i<=end_column;i++){
            results[start_row][i]=count
            count++
        }
        start_row++;
        for(let i=start_row; i<=end_row;i++){
            results[i][end_column]=count
            count++
        }
        end_column--
        for(let i=end_column;i>= start_column;i--){
            results[end_row][i]=count
            count++
        }
        end_row--
        for(let i=end_row; i>=start_row;i--){
            results[i][start_column]=count
            count++
        }
        start_column++
    }
    return results
}

module.exports = matrix;
