/* Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.
Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.
So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:
Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.

Example 1:
Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

Example 2:
Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed. 

can't really figure out*/

const findRadius = (houses, heaters) => {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    let before
    let after
    let heater = heaters[0];
    // index of the heater
    let i = 0;
    let radius = 0;

    for (let house of houses) {
        // looking for the heater that's immediately after the current house
        while (i < heaters.length - 1 && heaters[i] < house) {
            heater = heaters[i];
            i++;
        }

        before = Math.abs(house - heater);
        after = Math.abs(house - heaters[i]);
        radius = Math.max(radius, Math.min(before, after));
    }
    return radius;
}

console.log(findRadius([1, 2, 3], [2])) //1
// console.log(findRadius([1, 2, 3, 4], [1, 4])) //1




// const findRadius = (houses, heaters) => {
//     heaters.sort((a, b) => a - b)
//     return houses.reduce((max, house) => Math.max(max, closestHeaterDistance(house, heaters, 0, heaters.length - 1)), 0)
// }

// const closestHeaterDistance = (house, heaters, left, right) => {
//     if (left === right) return Math.abs(house - heaters[left])

//     let mid = Math.floor((left + right) / 2)
//     if (house < heaters[mid]) {
//         if (mid === 0) return Math.abs(house - heaters[0])
//         if (house > heaters[mid - 1]) {
//             return Math.min(Math.abs(house - heaters[mid]), Math.abs(house - heaters[mid - 1]))
//         }
//         return closestHeaterDistance(house, heaters, left, mid - 1)
//     } else if (house > heaters[mid]) {
//         if (mid === heaters.length - 1) return Math.abs(house - heaters[heaters.length - 1])
//         if (house < heaters[mid + 1]) {
//             return Math.min(Math.abs(house - heaters[mid]), Math.abs(house - heaters[mid + 1]))
//         }
//         return closestHeaterDistance(house, heaters, mid + 1, right)
//     }
//     return 0
// }

// const findRadius = (houses, heaters) => {
//     houses.sort((a, b) => a - b)
//     heaters.sort((a, b) => a - b)

//     let currHeater = 0
//     let min = 0
//     let currDist

//     for (let i = 0; i < houses.length; i++) {
//         currDist = Math.abs(houses[i] - heaters[currHeater])

//         while (currHeater + 1 < heaters.length && heaters[currHeater + 1] < houses[i]) {
//             currHeater++
//             currDist = Math.min(currDist, houses[i] - heaters[currHeater])
//         }
//         if (currHeater + 1 < heaters.length) {
//             currDist = Math.min(currDist, heaters[currHeater + 1] - houses[i])
//         }
//         min = Math.max(min, currDist)
//     }
//     return min
// }