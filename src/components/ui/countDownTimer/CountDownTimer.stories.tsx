import type { Meta, StoryObj } from "@storybook/react";

import CountDownTimer from "./CountDownTimer";
import { mockCountDownTimerProps } from "./CountDownTimer.mocks";

const meta = {
  title: "ui/CountDownTimer",
  component: CountDownTimer,
} satisfies Meta<typeof CountDownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockCountDownTimerProps.base,
  },
};
