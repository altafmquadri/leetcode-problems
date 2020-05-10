/* Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum. 
https://youtu.be/SBsRk-gGBuE
*/

const thirdMax = nums => {
    let max = nums[0]
    let secondMax = -Infinity
    let thirdMax = -Infinity

    for (let num of nums) {

        if (num > max) {
            thirdMax = secondMax
            secondMax = max
            max = num
        }
        if (num > secondMax && num < max) {
            thirdMax = secondMax
            secondMax = num
        }
        if (num > thirdMax && num < secondMax) thirdMax = num
    }
    return thirdMax === -Infinity ? max : thirdMax
}


/* code i found
var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a);
    let arr=[];
    for (let i=0; i<nums.length; i++) {
        if (nums[i]!==nums[i+1]) {
            arr.push(nums[i]);
        }
    }
    
    if (arr.length<3) {
        return Math.max(...arr);
    } else {
        return arr[2];
    }
};
*/


console.log(thirdMax([3, 2, 1]))//1
console.log(thirdMax([1, 2]))//2
console.log(thirdMax([2, 2, 3, 1]))//1