/**
 * Hackerrank
 * 
 * find the items in each container
 * s = "*|**|*"
 * * - items
 * | - start and end of each container
 * startIndices - []
 * endIndieces - []
 */

function findItems(s, startIndices, endIndieces) {
    let n = startIndices.length, output = [];

    if (n != endIndieces.length) return [];

    for (let i =0; i < n; i++) {

        let actual_count = 0, temp_count = 0, left = startIndices[i]-1, right = endIndieces[i]-1, container = 0;

        while (left <= right) {

            if (s[left] == "|") container++;
    
            if (container && s[left] == "*") temp_count++;

            if (container === 2) {
                container = 1;
                actual_count += temp_count;
                temp_count = 0;
            }

            left++;
        }

        output.push(actual_count);
    }

    return output;
}

items_count = findItems('*|**|**|*', [1,2], [7,8]);
console.log(items_count);