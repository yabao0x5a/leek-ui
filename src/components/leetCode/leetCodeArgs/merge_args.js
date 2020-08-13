/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:09:05
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:09:05
 */
export const merge_args = {
  titleString: `merge`,
  descriptionStringArr: [`Given a collection of intervals, merge all overlapping intervals.`, `给出若干闭合区间，合并所有重叠的部分。`],
  referenceLinkArr: ["https://www.lintcode.com/problem/merge-intervals/description?_from=ladder&&fromId=18", "https://leetcode-cn.com/problems/merge-intervals/"],
  levelArr: [`Medium`],
  companyArr: ["Google"],
  codeStringArr: [`
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  var merge = function(intervals) {
    if (!intervals || !intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (ans[ans.length - 1][1] >= intervals[i][0]) {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
        } else {
            ans.push(intervals[i])
        }
    }
    return ans;
  };
  `, `
  var merge = function (intervals) {
    if (intervals.length === 0) return []
    let res = []
    intervals.sort((a, b) => a[0] - b[0])
    let candidate = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
      let cur = intervals[i]
      if (candidate[1] >= cur[0]) { // 有重合 能合并
        candidate[1] = Math.max(cur[1], candidate[1]) // 左端不变 右端取大的
      } else { // 不重合 不能合并
        res.push(candidate)
        candidate = cur
      }
    }
    res.push(candidate)
    return res
  };
  `],
  timeComplexity: [``],
  spaceComplexity: [``],
};
