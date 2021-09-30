import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const encode = [];
  let current = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (current === str[i]) {
      count++;
    } else {
      encode.push(`${count > 1 ? count : ""}${current}`);
      current = str[i];
      count = 1;
    }
  }
  return encode.join('');
}

console.log(encodeLine("abbcca"));
