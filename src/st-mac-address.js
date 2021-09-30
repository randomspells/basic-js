import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(n)
}

let array = 'Z1-1B-63-84-45-E6'.split('-');
let newArray = array.filter(pair => /[A-F0-9]/.test(pair))
console.log(newArray);
console.log(isMAC48Address('Z1-1B-63-84-45-E6'));