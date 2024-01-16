import type { Meta, StoryObj } from "@storybook/react";

import { AudioContextProvider } from "../audioContextProvider/AudioContextProvider";
import AudioSelector from "./AudioSelector";
import { mockAudioSelectorProps } from "./AudioSelector.mocks";

const meta = {
  title: "features/AudioSelector",
  decorators: [
    (story) => <AudioContextProvider>{story()}</AudioContextProvider>,
  ],
  component: AudioSelector,
} satisfies Meta<typeof AudioSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockAudioSelectorProps.base,
  },
};
