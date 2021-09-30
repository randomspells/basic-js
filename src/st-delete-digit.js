import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

export default function deleteDigit(n) {
  const arr = String(n).split("");
  const min = arr.indexOf(String(Math.min(...arr)));
  arr.splice(min, 1);
  return Number(arr.join(''));
}

console.log(deleteDigit(21145));
