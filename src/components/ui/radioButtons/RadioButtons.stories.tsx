import type { Meta, StoryObj } from "@storybook/react";

import RadioButtons from "./RadioButtons";
import { mockRadioButtonsProps } from "./RadioButtons.mocks";

const meta = {
  title: "ui/RadioButtons",
  component: RadioButtons,
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockRadioButtonsProps.base,
  },
};
