import type { Meta, StoryObj } from "@storybook/react";

import HomePage from "./HomePage";
import { mockHomePageProps } from "./HomePage.mocks";

const meta = {
  title: "pages/HomePage",
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockHomePageProps.base,
  },
};
