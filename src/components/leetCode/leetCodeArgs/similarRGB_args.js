/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:20:49
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:20:49
 */
export const similarRGB_args = {
  titleString: `similarRGB`,
  descriptionStringArr: [
    `In the following, every capital letter represents some hexadecimal digit from 0 to f.

    The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand. For example, "#15c" is shorthand for the color "#1155cc".
    
    Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ" is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.
    
    Given the color "#ABCDEF", return a 7 character color that is most similar to #ABCDEF, and has a shorthand (that is, it can be represented as some "#XYZ")`,
    `在本题中，每个大写字母代表从“0”到“f”的一些十六进制数字。

    红绿蓝三元色#AABBCC可以简写为#ABC。 例如，#15c是颜色#1155cc的简写。
    
    现在，假设两种颜色#ABCDEF和#UVWXYZ之间的相似性是-(AB - UV) ^ 2 - (CD - WX) ^ 2 - (EF - YZ) ^ 2。
    
    给定颜色#ABCDEF，返回与#ABCDEF最相似且含有一个简写的7字符颜色（也就是说，它可以用类似#XYZ的形式表示）。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/similar-rgb-color/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/similar-rgb-color/",
  ],
  levelArr: [`Easy`, "Medium"],
  companyArr: ["Google", ""],
  codeStringArr: [
    `var similarRGB = function(color) {
    const target = color2RGB(color);
    const step = 16 * 1 + 1;
    let res = '';
    let minDiff = Infinity;
  
    for (let r = 0; r <= 255; r += step) {
      for (let g = 0; g <= 255; g += step) {
        for (let b = 0; b <= 255; b += step) {
          const d = Math.pow(r - target[0], 2) + Math.pow(g - target[1], 2) + Math.pow(b - target[2], 2);
          if (d < minDiff) { // 如果差距更小，则更新答案
            minDiff = d;
            res = rgb2Color(r, g, b);
          }
        }
      }
    }
  
    return res;
  };
  
  function color2RGB(color) {
    const res = [];
    res.push(Number.parseInt(color.slice(1, 3), 16));
    res.push(Number.parseInt(color.slice(3, 5), 16));
    res.push(Number.parseInt(color.slice(5, 7), 16));
    return res;
  }
  
  function rgb2Color(r, g, b) {
    let res = '#';
    res += r ? r.toString(16) : '00';
    res += g ? g.toString(16) : '00';
    res += b ? b.toString(16) : '00';
    return res;
  }`,
  ],
};
