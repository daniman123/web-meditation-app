import type { Meta, StoryObj } from "@storybook/react";

import ConfigureMeditation from "./ConfigureMeditation";
import { mockConfigureMeditationProps } from "./ConfigureMeditation.mocks";

const meta = {
  title: "features/ConfigureMeditation",
  component: ConfigureMeditation,
} satisfies Meta<typeof ConfigureMeditation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockConfigureMeditationProps.base,
  },
};
