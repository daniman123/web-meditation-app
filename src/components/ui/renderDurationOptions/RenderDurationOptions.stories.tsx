import type { Meta, StoryObj } from "@storybook/react";

import RenderDurationOptions from "./RenderDurationOptions";
import { mockRenderDurationOptionsProps } from "./RenderDurationOptions.mocks";

const meta = {
  title: "ui/RenderDurationOptions",
  component: RenderDurationOptions,
} satisfies Meta<typeof RenderDurationOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockRenderDurationOptionsProps.base,
  },
};
