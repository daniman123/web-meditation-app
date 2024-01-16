import type { Meta, StoryObj } from "@storybook/react";

import MeditationContent from "./MeditationContent";
import { mockMeditationContentProps } from "./MeditationContent.mocks";

const meta = {
  title: "features/MeditationContent",
  component: MeditationContent,
} satisfies Meta<typeof MeditationContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockMeditationContentProps.base,
  },
};
