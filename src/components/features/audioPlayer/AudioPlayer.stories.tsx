import type { Meta, StoryObj } from "@storybook/react";

import AudioPlayer from "./AudioPlayer";
import { mockAudioPlayerProps } from "./AudioPlayer.mocks";

const meta = {
  title: "features/AudioPlayer",
  component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockAudioPlayerProps.base,
  },
};
