import type { Meta, StoryObj } from "@storybook/react";

import PlayPauseButton from "./PlayPauseButton";
import { mockPlayPauseButtonProps } from "./PlayPauseButton.mocks";

const meta = {
  title: "ui/PlayPauseButton",
  component: PlayPauseButton,
} satisfies Meta<typeof PlayPauseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockPlayPauseButtonProps.base,
  },
};
export const Secondary: Story = {
  args: {
    ...mockPlayPauseButtonProps.secondary,
  },
};
