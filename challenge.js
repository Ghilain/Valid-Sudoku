/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // decrale variables 
    const found = new Set();
    let block;
    // decrale loop used for rows
    for (let i=0; i<9; ++i) {
        // decrale loop for columns
        for (let j=0; j<9; ++j) {
            // decrale variable number
            let number = board[i][j];
            // add if condition to check if number not charcter
            if (number != '.') {

            }
        }
    }
};