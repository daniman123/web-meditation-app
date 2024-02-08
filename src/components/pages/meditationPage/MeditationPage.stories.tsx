import type { Meta, StoryObj } from "@storybook/react";

import MeditationPage from "./MeditationPage";
import { mockMeditationPageProps } from "./MeditationPage.mocks";

const meta = {
  title: "pages/MeditationPage",
  component: MeditationPage,
} satisfies Meta<typeof MeditationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockMeditationPageProps.base,
  },
};
