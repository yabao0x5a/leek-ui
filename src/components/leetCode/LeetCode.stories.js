/*
 * @Author: Lin Zhang 
 * @Date: yyyy-08-We 09:21:07 
 * @Last Modified by:   Lin Zhang 
 * @Last Modified time: yyyy-08-We 09:21:07 
 */
import React from "react";

import { LeetCode } from "./LeetCode";

import { findMaxConsecutiveOnes_args } from "./leetCodeArgs/findMaxConsecutiveOnes_args";
import { isToeplitzMatrix_args } from "./leetCodeArgs/isToeplitzMatrix_args";
import { similarRGB_args } from "./leetCodeArgs/similarRGB_args";
import { generatePossibleNextMoves_args } from "./leetCodeArgs/generatePossibleNextMoves_args";
import { validWordSquare_args } from "./leetCodeArgs/validWordSquare_args";

import { sample_args } from "./leetCodeArgs/sample_args";

export default {
  title: "Example/LeetCode",
  component: LeetCode,
};

const Template = (args) => <LeetCode {...args} />;

export const findMaxConsecutiveOnes = Template.bind({});
findMaxConsecutiveOnes.args = findMaxConsecutiveOnes_args;

export const isToeplitzMatrix = Template.bind({});
isToeplitzMatrix.args = isToeplitzMatrix_args;

export const similarRGB = Template.bind({});
similarRGB.args = similarRGB_args;

export const generatePossibleNextMoves = Template.bind({});
generatePossibleNextMoves.args = generatePossibleNextMoves_args;

export const validWordSquare = Template.bind({});
validWordSquare.args = validWordSquare_args;

// smaple
export const sample = Template.bind({});
sample.args = sample_args;
