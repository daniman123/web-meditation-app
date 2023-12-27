import type { Meta, StoryObj } from "@storybook/react";

import MeditationRuntime from "./MeditationRuntime";
import { mockMeditationRuntimeProps } from "./MeditationRuntime.mocks";

const meta = {
  title: "features/MeditationRuntime",
  component: MeditationRuntime,
} satisfies Meta<typeof MeditationRuntime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockMeditationRuntimeProps.base,
  },
};
