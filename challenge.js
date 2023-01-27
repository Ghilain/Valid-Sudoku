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
                block = `${number} in block ${parseInt(i / 3)}-${parseInt(j / 3)}`;
                // If condition to check if number has not found in row
                if (!found.has(number + " in row " + i) &&
                    !found.has(number + " in column " + j) &&
                    !found.has(block)) { //if not in block then add in
                        found.add(number + " in row " + i)
                        found.add(number + " in column " + j)
                        found.add(block)
                } else { // else return false
                    return false;
                }
            }
        }
    }
};