import type { Meta, StoryObj } from "@storybook/react";

import RouterButton from "./RouterButton";
import { mockRouterButtonProps } from "./RouterButton.mocks";

const meta = {
  title: "ui/RouterButton",
  parameters: {
    layout: "centered",
  },
  component: RouterButton,
} satisfies Meta<typeof RouterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockRouterButtonProps.base,
  },
};
