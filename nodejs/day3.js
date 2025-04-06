/**
 * Daily Temperature
 * 
 * Input:
 * temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 * Output:
 * answer = [1, 1, 4, 2, 1, 1, 0, 0]
 * 
 * Input:
 * temperatures = [20, 30, 40, 50]
 * Output:
 * answer = [1, 1, 1, 0]
 */

function dailyTemperature(temperatures) {

    let n = temperatures.length;
    let answer = new Array(n).fill(0);

    let i = 0, j = 1, days = 0;

    while (i < n-1) {

        if (j > n-1) {
            i++;
            j = i + 1;
            days = 0;
        }

        if (temperatures[i] < temperatures[j]) {
            answer[i] = ++days;
            days = 0;
            i++;
            j = i + 1;
        } else {
            days++;
            j++;
        }
    }

    return answer;
}

// console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperature([20, 30, 40, 50]));
console.log(dailyTemperature([20, 30, 40, 50, 40 , 30, 50 , 60]));