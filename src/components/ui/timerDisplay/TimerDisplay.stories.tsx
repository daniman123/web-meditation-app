import type { Meta, StoryObj } from "@storybook/react";

import TimerDisplay from "./TimerDisplay";
import { mockTimerDisplayProps } from "./TimerDisplay.mocks";

const meta = {
  title: "ui/TimerDisplay",
  component: TimerDisplay,
} satisfies Meta<typeof TimerDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockTimerDisplayProps.base,
  },
};
