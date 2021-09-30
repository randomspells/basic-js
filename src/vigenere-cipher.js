import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  }
  encrypt(message, key) {
    // const messageBig = message.toUpperCase();
    // const keyBig = key.toUpperCase();
    // let repeated = "";
    // let j = 0;
    // for (let i = 0; i < messageBig.length; i++) {
    //   if (this.alphabet.indexOf(messageBig[i]) > -1) {
    //     repeated += keyBig[j];
    //     j++;
    //   } else {
    //     repeated += messageBig[i];
    //   }
    //   if (j > key.length - 1) j = 0;
    // }

    // let cipher = "";
    // for (let i = 0; i < messageBig.length; i++) {
    //   if (this.alphabet.indexOf(messageBig[i]) > -1) {
    //     let row = this.alphabet.indexOf(messageBig[i]);
    //     let col = this.alphabet.indexOf(repeated[i]);
    //     let position = row + col;
    //     if (position > this.alphabet.length) position -= this.alphabet.length;
    //     cipher += this.alphabet[position];
    //   } else {
    //     cipher += messageBig[i];
    //   }
    // }

    // return this.direction ? cipher : cipher.split("").reverse().join("");
  }

  decrypt(cipher, key) {
    // const cipherBig = cipher.toUpperCase();
    // const keyBig = key.toUpperCase();
    // let repeated = "";
    // let j = 0;
    // for (let i = 0; i < cipherBig.length; i++) {
    //   if (this.alphabet.indexOf(cipherBig[i]) > -1) {
    //     repeated += keyBig[j];
    //     j++;
    //   } else {
    //     repeated += cipherBig[i];
    //   }
    //   if (j > key.length - 1) j = 0;
    // }

    // let message = "";
    // for (let i = 0; i < cipherBig.length; i++) {
    //   if (this.alphabet.indexOf(cipherBig[i]) > -1) {
    //     let col = this.alphabet.indexOf(cipherBig[i]);
    //     let row = this.alphabet.indexOf(repeated[i]);
    //     let position = row - col;
    //     if (position > this.alphabet.length) position -= this.alphabet.length;
    //     message += this.alphabet[position];
    //   } else {
    //     message += cipherBig[i];
    //   }
    // }
    // return message;
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.direction);
console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
