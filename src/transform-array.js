import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArray = arr.map((item) => item);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "--double-next" && newArray[i + 1]) {
      newArray[i] = newArray[i + 1];
    }
    if (newArray[i] === "--double-prev" && newArray[i - 1]) {
      newArray[i] = newArray[i - 1];
    }
    if (newArray[i] === "--discard-next" && newArray[i + 1]) {
      newArray[i + 1] = "--";
    }
    if (newArray[i] === "--discard-prev" && newArray[i - 1]) {
      newArray[i - 1] = "--";
    }
  }
  return newArray.filter((item) => String(item).indexOf("--") === -1);
}

