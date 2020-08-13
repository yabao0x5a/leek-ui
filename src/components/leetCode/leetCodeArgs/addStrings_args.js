/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 11:22:07
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 11:22:07
 */

export const addStrings_args = {
  titleString: `addStrings`,
  descriptionStringArr: [
    `Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.`,
    `以字符串的形式给出两个非负整数 num1 和 num2，返回 num1 和 num2 的和。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/add-strings/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/add-strings/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google"],
  codeStringArr: [
    `
  const addStrings = (num1, num2) => {
    while (num1.length > num2.length) num2 = '0' + num2;
    while (num1.length < num2.length) num1 = '0' + num1; // 先补0对齐
    let res = '';     // 结果字符串
    let carry = 0;    // 进位
    for (let i = num1.length - 1; i >= 0; i--) { // 加法 从右往左做
      const sum = +num1[i] + +num2[i] + carry;   // +号将字符转数字
      res = sum % 10 + res;                      // 模10的结果 + res字符串
      carry = sum > 9 ? 1 : 0;
    }
    return carry == 1 ? '1' + res : res;
  };
  `,
    `
  const addStrings = (num1, num2) => {
    let res = '';  
    let carry = 0;
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
      const n1 = num1[i] >= 0 ? +num1[i] : 0;
      const n2 = num2[j] >= 0 ? +num2[j] : 0;
      const sum = n1 + n2 + carry;
      res = sum % 10 + res;
      carry = sum / 10 | 0; 
    }
    carry && (res = '1' + res);
    return res;
  };
  `,
  ],
  timeComplexity: [`时间复杂度O(n)，n是较长的数字字符串的长度`],
  spaceComplexity: [`空间复杂度 O(1)`],
};
