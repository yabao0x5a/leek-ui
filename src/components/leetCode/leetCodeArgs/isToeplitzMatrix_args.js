/*
 * @Author: Lin Zhang
 * @Date: yyyy-08-We 09:09:05
 * @Last Modified by:   Lin Zhang
 * @Last Modified time: yyyy-08-We 09:09:05
 */
export const isToeplitzMatrix_args = {
  titleString: `isToeplitzMatrix`,
  descriptionStringArr: [
    `A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
    Now given an M x N matrix, return True if and only if the matrix is Toeplitz.`,
    `“托普利兹矩阵”是指如果从左上角到右下角的同一条主斜线上每个元素都相等的矩阵.
    给定一个M x N矩阵，判断是否为“托普利兹矩阵”.`,
  ],
  referenceLinkArr: [
    "https://www.lintcode.com/problem/toeplitz-matrix/description?_from=ladder&&fromId=18",
    "https://leetcode-cn.com/problems/toeplitz-matrix/",
  ],
  levelArr: [`Easy`],
  companyArr: ["Google", ""],
  codeStringArr: [
    `/**
    * @param {number[][]} matrix
    * @return {boolean}
    */
    var isToeplitzMatrix = function(matrix) {
        if (matrix.length === 1 || matrix[0].length === 1) return true;
        for (let i=1;i<matrix.length;i++) {
            for (let j=1;j<matrix[0].length;j++) {
                if (matrix[i][j] !== matrix[i-1][j-1]) {
                    return false;
                }
            }
        }
        return true;
    };`,
    ``,
  ],
  timeComplexity: [``, ``],
  spaceComplexity: [``, ``],
};
