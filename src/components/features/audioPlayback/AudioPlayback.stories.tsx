import type { Meta, StoryObj } from "@storybook/react";

import AudioPlayback from "./AudioPlayback";
import { mockAudioPlaybackProps } from "./AudioPlayback.mocks";

const meta = {
  title: "features/AudioPlayback",
  component: AudioPlayback,
} satisfies Meta<typeof AudioPlayback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockAudioPlaybackProps.base,
  },
};
