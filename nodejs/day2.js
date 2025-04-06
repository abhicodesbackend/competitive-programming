/**
 * Count the number of days without meeting
 * ------------------------------------------
 * Case 1:
 * 
 * days = 10
 * meetings = [[5,7], [1,3], [9,10]]
 * 
 * output = 2
 * no meetings on 4th and 8th day
 * ------------------------------------------
 * Case 2:
 * 
 * days = 5
 * meetings = [[1,2], [3,4]]
 * 
 * output = 1
 * no meeting on 5th day
 * ------------------------------------------
 * Case 3:
 * 
 * days = 6
 * meetings = [[1,6]]
 * 
 * output = 0
 * meetings held on all days
 */

// APPROACH 1
function checkMeetings(days, meetings) {
    
    if (days <= 0) return 0;

    if (meetings == []) return 0;

    let available_days = Array(days).fill(1);

    meetings.forEach(meeting => {
        available_days.fill(0, meeting[0]-1, meeting[1]);
    });

    console.log(available_days.reduce((i, j) => i + j));
}


// APPROACH 2
function checkMeetings(days, meetings) {
    meetings.sort((a,b) => a[0] - b[0]);

    let [start, end] = meetings[0];

    let meeting_days = 0;

    for (let i = 1; i < meetings.length; i++) {

        let [currStart, currEnd] = meetings[i];

        if (currStart <= end+1) {
            end = Math.max(currEnd, end);
        } else {
            meeting_days += (end - start + 1);
            [start, end] = [currStart, currEnd];
        }
    }

    meeting_days += (end - start + 1);

    console.log(days - meeting_days);
}

checkMeetings(10, [[1,2], [5,10]]);