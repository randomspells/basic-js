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
    this.message;
    this.key;
  }

  formKeyString() {
    let keyString = "";
    let j = 0;
    for (let i = 0; i < this.message.length; i++) {
      if (this.alphabet.indexOf(this.message[i]) > -1) {
        keyString += this.key[j];
        j++;
      } else {
        keyString += this.message[i];
      }
      if (j >= this.key.length) j = 0;
    }
    return keyString;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    let cipher = "";
    let keyString = this.formKeyString(this.message, this.key);
    console.log(keyString);
    for (let i = 0; i < this.message.length; i++) {
      if (this.alphabet.indexOf(this.message[i]) > -1) {
        let messagePos = this.alphabet.indexOf(this.message[i]);
        let keyPos = this.alphabet.indexOf(keyString[i]);
        let position = messagePos + keyPos;
        if (position >= this.alphabet.length) position -= this.alphabet.length;
        cipher += this.alphabet[position];
      } else {
        cipher += this.message[i];
      }
    }

    return this.direction ? cipher : cipher.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    let cipher = "";
    let keyString = this.formKeyString(this.message, this.key);
    for (let i = 0; i < this.message.length; i++) {
      if (this.alphabet.indexOf(this.message[i]) > -1) {
        let messagePos = this.alphabet.indexOf(this.message[i]);
        let keyPos = this.alphabet.indexOf(keyString[i]);
        let position = messagePos - keyPos;
        if (position < 0) position += this.alphabet.length;
        cipher += this.alphabet[position];
      } else {
        cipher += this.message[i];
      }
    }
    return this.direction ? cipher : cipher.split("").reverse().join("");
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.direction);

console.log(directMachine.encrypt("Samelengthkey", "Samelengthkey"));
console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
