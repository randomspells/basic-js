import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sorted = arr.filter(num => num > -1).sort((a, b) => {
    if (a !== -1 && b !== -1) {
      return a - b;
    }
  });

  return arr.map(height => {
    if (height > -1) {
      return height = sorted.splice(0, 1)[0]
    } else return -1
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));