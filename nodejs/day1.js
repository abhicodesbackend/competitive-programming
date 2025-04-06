/**
 * n -> 2
 * Input -> [[1,3], [2,2]]
 * Output -> [2,4]
 * 
 * n -> 2
 * Input -> [[1,3], [4,2]]
 * Output -> []
 * 
 * n -> 3
 * Input -> [[1,3,2],[4,6,7],[8,9,9]]
 * Output -> [5,9]
 */

let n = 3;
let input = [[1,3,2],[4,6,7],[8,9,9]];

let output = [];

let trace = Array(n*n).fill(0);

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        if (!trace[input[i][j]-1]) {
            trace[input[i][j]-1] = 1;
        } else {
            trace[input[i][j]-1] = 0;
            // output.push(input[i][j]);
        }
    }
}

for (let i = 0; i < n*n; i++) {
    if (!trace[i]) {
        output.push(i + 1);
    }
}

console.log(output);