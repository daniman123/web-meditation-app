import type { Meta, StoryObj } from "@storybook/react";

import { MeditationLogList } from "./MeditationLogList";
import { mockMeditationLogListProps } from "./MeditationLogList.mocks";

const meta = {
  title: "ui/MeditationLogList",
  component: MeditationLogList,
} satisfies Meta<typeof MeditationLogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockMeditationLogListProps.base,
  },
};
