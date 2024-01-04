import type { Meta, StoryObj } from "@storybook/react";

import MeditationLogs from "./MeditationLogs";
import { mockMeditationLogsProps } from "./MeditationLogs.mocks";

const meta = {
  title: "features/MeditationLogs",
  component: MeditationLogs,
} satisfies Meta<typeof MeditationLogs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockMeditationLogsProps.base,
  },
};
