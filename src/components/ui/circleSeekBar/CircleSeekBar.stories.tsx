import type { Meta, StoryObj } from "@storybook/react";

import CircleSeekBar from "./CircleSeekBar";
import { mockCircleSeekBarProps } from "./CircleSeekBar.mocks";

const meta = {
  title: "ui/CircleSeekBar",
  component: CircleSeekBar,
} satisfies Meta<typeof CircleSeekBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockCircleSeekBarProps.base,
  },
};
