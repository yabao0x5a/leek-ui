/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:09:05
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:09:05
 */
export const plusOne_args = {
  titleString: `plusOne`,
  descriptionStringArr: [
    `Given a non-negative number represented as an array of digits, plus one to the number.

  The digits are stored such that the most significant digit is at the head of the list.`,
    `给定一个非负数，表示一个数字数组，在该数的基础上+1，返回一个新的数组。

  该数字按照数位高低进行排列，最高位的数在列表的最前面。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/plus-one/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/plus-one/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google"],
  codeStringArr: [
    `
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    var plusOne = function(digits) {
      const str = digits.join("");
      const ans_str = parseInt(str, 10) + 1 + "";
      return ans_str.split("").map(Number);
    };
    `,
    `
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    var plusOne = function(digits) {
        const len = digits.length;
        for(let i = len - 1; i >= 0; i--) {
            digits[i]++;
            digits[i] %= 10;
            if(digits[i]!=0)
                return digits;
        }
        digits = [...Array(len + 1)].map(_=>0);;
        digits[0] = 1;
        return digits;
    };
    `,
  ],
  timeComplexity: [``],
  spaceComplexity: [``],
};
