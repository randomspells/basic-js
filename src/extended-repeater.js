import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) options.separator = "+";
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = "|";

  let fullAddition = '';
  if (options.hasOwnProperty('addition')) {
    fullAddition = Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
      .fill(String(options.addition))
      .join(options.additionSeparator);
  }

  return Array(options.repeatTimes)
    .fill(String(str))
    .map((str) => fullAddition ? str + fullAddition : str)
    .join(options.separator);
}
