/*
 * @Author: Lin Zhang 
 * @Date: yyyy-08-Th 12:12:14 
 * @Last Modified by:   Lin Zhang 
 * @Last Modified time: yyyy-08-Th 12:12:14 
 */

export const isValidParentheses_args = {
  titleString: `isValidParentheses`,
  descriptionStringArr: [
    `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.`,
    `给定一个字符串所表示的括号序列，包含以下字符： '(', ')', '{', '}', '[' and ']'， 判定是否是有效的括号序列。

  括号必须依照 "()" 顺序表示， "()[]{}" 是有效的括号，但 "([)]" 则是无效的括号。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/valid-parentheses/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/valid-parentheses/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", ""],
  codeStringArr: [
    `
    let map: any = {
      '{' : '}',
      '(' : ')',
      '[' : ']'
    }
    
    function isValid(s: string): boolean {
    
        let stack: string[] = [];
        let top: string | undefined;
    
        for(let char of s){
            let value;
            if((value = map[char])){
                stack.push(value);
            }else{
                top = stack.pop();
                if(top !== char){
                    return false;
                }
            }
        }
    
        return !stack.length;
    }
    `,
    `
  const isValidParentheses = function(s) {
    var rightSymbols = [];
    for (var i = 0; i < s.length; i++) {
        if(s[i] == "("){
            rightSymbols.push(")");
        }else if(s[i] == "{"){
            rightSymbols.push("}");
        }else if(s[i] == "["){
            rightSymbols.push("]");
        }else if(rightSymbols.pop() != s[i] ){
            return false;
        }
    }
    return !rightSymbols.length;
  }
  `,
  `
  var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const len = s.length/2;
    for (let i = 0; i < len; i++) {
        s = s.replace(/(\(\))|(\[\])|(\{\})/, '');
    }
    return s.length == 0;
  }
  `
  ],
  timeComplexity: [``],
  spaceComplexity: [``],
};
