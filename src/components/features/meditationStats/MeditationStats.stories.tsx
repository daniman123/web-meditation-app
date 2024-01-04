import type { Meta, StoryObj } from "@storybook/react";

import MeditationStats from "./MeditationStats";
import { mockMeditationStatsProps } from "./MeditationStats.mocks";

const meta = {
  title: "features/MeditationStats",
  component: MeditationStats,
} satisfies Meta<typeof MeditationStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockMeditationStatsProps.base,
  },
};

export const Primary: Story = {
  args: {
    ...mockMeditationStatsProps.primary,
  },
};
export const Secondary: Story = {
  args: {
    ...mockMeditationStatsProps.secondary,
  },
};
