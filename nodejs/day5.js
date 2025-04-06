/**
 * Product of the elements of an array except that element
 * 
 * Input:
 * arr = [1,2,3,4]
 * Output:
 * [24,12,8,6]
 */

// APPROACH 1
function product(arr) {

    const n = arr.length;
    let left = Array(n).fill(1);
    let right = Array(n).fill(1);
    let final = [];
    for (let i = 1; i < n; i++) {

        left[i] = left[i-1] * arr[i-1];
        right[n-1-i] = right[n-i] * arr[n-i];        
    }

    for (let i = 0; i < n; i++) final[i] = left[i] * right[i];

    console.log(left, right, final);
}

// APPROACH 2
function product(arr) {

    let n = arr.length;
    let left = right = 1;
    let result = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= arr[i];
    }

    for (let i = n-1; i >= 0; i--) {
        result[i] *= right;
        right *= arr[i];
    }

    console.log(result);
}

product([1,2,3,4]);