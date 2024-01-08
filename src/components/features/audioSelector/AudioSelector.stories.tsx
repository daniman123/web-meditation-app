import type { Meta, StoryObj } from "@storybook/react";

import AudioSelector from "./AudioSelector";
import { mockAudioSelectorProps } from "./AudioSelector.mocks";

const meta = {
  title: "features/AudioSelector",
  component: AudioSelector,
} satisfies Meta<typeof AudioSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockAudioSelectorProps.base,
  },
};
