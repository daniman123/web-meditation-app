import type { Meta, StoryObj } from "@storybook/react";

import PlayBackDisplay from "./PlayBackDisplay";
import { mockPlayBackDisplayProps } from "./PlayBackDisplay.mocks";

const meta = {
  title: "ui/PlayBackDisplay",
  component: PlayBackDisplay,
} satisfies Meta<typeof PlayBackDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockPlayBackDisplayProps.base,
  },
};
