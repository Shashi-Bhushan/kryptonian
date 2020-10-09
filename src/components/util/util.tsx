import { Base64 } from "js-base64";

class EncryptionUtil {
  private static characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  public static getPaddedString(str: string) {
    let len = str.length;

    let rem = len % 16;
    if (rem == 0) return str;
    else {
      let newLength = (Math.floor(len / 16) + 1) * 16;

      return str.padEnd(newLength);
    }
  }

  public static getPaddedBase64String(str: string) {
    let len = str.length;

    let rem = len % 16;
    if (rem == 0) return str;
    else {
      let newLength = (Math.floor(len / 16) + 1) * 16;

      return str.padEnd(newLength, "=");
    }
  }

  public static getRandomSecret() {
    let arr = new Uint8Array(16);

    window.crypto.getRandomValues(arr);
    console.log("calling");
    return Array.from(arr, this.dec2hex).join("");
  }

  private static dec2hex (dec: number) {
    return dec < 10
      ? '0' + String(dec)
      : dec.toString(16)
  }
}

export default EncryptionUtil;
