import type { Meta, StoryObj } from "@storybook/react";

import SettingsPage from "./SettingsPage";
import { mockSettingsPageProps } from "./SettingsPage.mocks";

const meta = {
  title: "pages/SettingsPage",
  component: SettingsPage,
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockSettingsPageProps.base,
  },
};
