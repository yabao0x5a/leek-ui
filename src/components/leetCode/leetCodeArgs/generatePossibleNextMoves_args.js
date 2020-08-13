/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:09:05
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:09:05
 */
export const generatePossibleNextMoves_args = {
  titleString: `generatePossibleNextMoves`,
  descriptionStringArr: [
    `You are playing the following Flip Game with your friend: Given a string that contains only two characters: + and -, you can flip two consecutive "++" into "--", you can only flip one time. Please find all strings that can be obtained after one flip.

  Write a program to find all possible states of the string after one valid move.`,
    `翻转游戏：给定一个只包含两种字符的字符串：+和-。你可以将两个连续的“++”翻转成"--"，你需要翻转一次，并找到翻转后所有可能得到的结果。

  编写一个程序，找到字符串在一次有效翻转后的所有可能状态。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/flip-game/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/flip-game/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", ""],
  codeStringArr: [
    `
    var generatePossibleNextMoves = function(s) {
      let result = []
      s= s.split('')
      if(!s.includes('+')) {
        return []
      }
      for (var i = 0; i< s.length; i++) {
        if(s[i]===s[i+1]) {
          const ss = [...s]
          if(s[i] === "+") {
          ss[i] =ss[i+1] = '-'
            result.push(ss.join(''))
          }
        }
      }
      return result
    };
  `,
  ],
};
