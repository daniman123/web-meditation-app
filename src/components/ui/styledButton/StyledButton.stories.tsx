import type { Meta, StoryObj } from "@storybook/react";

import StyledButton from "./StyledButton";
import { mockStyledButtonProps } from "./StyledButton.mocks";

const meta = {
  title: "ui/StyledButton",
  component: StyledButton,
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockStyledButtonProps.base,
  },
};
