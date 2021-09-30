import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const dns = {};
  domains.forEach((domain) => {
    const divided = domain.split(".").reverse();
    const collected = [];
    let current = "";
    divided.forEach((part) => {
      current += `.${part}`;
      collected.push(current);
    });

    collected.forEach((address) => {
      if (!dns[address]) {
        dns[address] = 0;
      }
      dns[address]++;
    });
  });

  return dns;
}

console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));
// getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 }
