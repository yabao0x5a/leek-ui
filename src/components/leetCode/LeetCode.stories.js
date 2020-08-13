import React from "react";

import { LeetCode } from "./LeetCode";

import { findMaxConsecutiveOnes_args } from "./leetCodeArgs/findMaxConsecutiveOnes_args";

export default {
  title: "Example/LeetCode",
  component: LeetCode,
};

const Template = (args) => <LeetCode {...args} />;

export const findMaxConsecutiveOnes = Template.bind({});
findMaxConsecutiveOnes.args = findMaxConsecutiveOnes_args;
