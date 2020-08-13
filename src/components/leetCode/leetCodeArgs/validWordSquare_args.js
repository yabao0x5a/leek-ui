/*
 * @Author: Lin Zhang 
 * @Date: yyyy-08-We 09:48:44 
 * @Last Modified by:   Lin Zhang 
 * @Last Modified time: yyyy-08-We 09:48:44 
 */

export const validWordSquare_args = {
  titleString: `validWordSquare`,
  descriptionStringArr: [
    `Given a sequence of words, check whether it forms a valid word square.
  A sequence of words forms a valid word square if the k^th row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).`,
    `给定一个单词序列，检查它是否构成一个有效单词方阵。
  一个有效的单词方阵应满足以下条件：对于满足0≤k<max(numRows numColumns)的k，第k行和第k列对应的字符串应该相同,。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/valid-word-square/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/valid-word-square/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", ""],
  codeStringArr: [
    `
    var validWordSquare = function(words) {
      // 1x1 是有效方块
      if(words.length === 1 && words[0] === "") return true;
      if(words.length === 1 && words[0].length === 1) return true;
      
      // 第一行不等于第一列 不是有效方块
      if(words.map(x => x[0]).join('') !== words[0]) return false;
      
      // 切除第一行和第一列
      words = words.slice(1).map(x => x.slice(1));
      
      // 递归
      return validWordSquare(words);
    };`,
  ],
  timeComplexity: [``, ``],
  spaceComplexity: [``, ``],
};
