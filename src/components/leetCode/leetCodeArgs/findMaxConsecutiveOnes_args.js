export const findMaxConsecutiveOnes_args = {
  titleString: `findMaxConsecutiveOnes`,
  descriptionStringArr: [
    `1212. Max Consecutive Ones Given a binary array, find the maximum number of consecutive 1s in this array.`,
    `给定一个二进制数组， 计算其中最大连续1的个数。`
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/max-consecutive-ones/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/max-consecutive-ones/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", "Amazon"],
  codeStringArr: [
      `
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var findMaxConsecutiveOnes = function(nums) {
            const dp = []
            
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] & 1) {
                    dp[i] = dp[i - 1] === undefined ? 0 + 1 : dp[i - 1] + 1
                } else {
                    dp[i] = 0
                }
            }
            
            return Math.max(...dp)
        };
      `,
      `
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var findMaxConsecutiveOnes = function(nums) {
            let max_length = 0
            let temp = 0
            
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] & 1) {
                    temp += 1
                } else {
                    temp = 0
                }
                max_length = Math.max(max_length, temp)
            }
            
            return max_length
        };
      `
  ]
};
