/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:09:05
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:09:05
 */
export const numWays_args = {
  titleString: `numWays_args`,
  descriptionStringArr: [
    `There is a fence with n posts, each post can be painted with one of the k colors.
  You have to paint all the posts such that no more than two adjacent fence posts have the same color.
  Return the total number of ways you can paint the fence.`,
    `我们有一个栅栏，它有n个柱子，现在要给柱子染色，有k种颜色可以染。
  必须保证不存在超过2个相邻的柱子颜色相同，求有多少种染色方案。`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/paint-fence/description?_from=ladder&&fromId=18",
    "",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", ""],
  codeStringArr: [
    `
  /**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    let arr = new Array();
    arr[0] = 0;
    arr[1] = k;
    arr[2] = k * k;
    for(let i = 3; i < n + 1; i++) {
        arr[i] = (k-1) * arr[i-1] + (k-1) * arr[i-2];
    } 
    return arr[n];
};
  `,
    `
  /**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
    // 动态规划思想
    // n与n-1颜色不同，那么 数量sum为 dp[n-1]*(k-1) 
    // n与n-1颜色相同，那么与n-2颜色不同 数量sum为 dp[n-2]*(k-1)
    // 那么dp[n] = dp[n-1]*(k-1) + dp[n-2]*(k-1) = (dp[n-1] + dp[n-2]) * (k-1)
    if (n === 1) {
        return k;
    }
    if (n === 2) {
        return k * k;
    }
    let sum = 0, x = k, y = k * k;
    for (let i = 2; i < n; i++) {
        sum = (x + y) * (k - 1);
        x = y;
        y = sum;
    }
    return sum;
};
  `,
  ],
  timeComplexity: [``],
  spaceComplexity: [``],
};
