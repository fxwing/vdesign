import type { Meta, StoryObj } from "@storybook/react";
import { Badges as BadgesComponents, badgesColor } from "vdesign";

const meta: Meta<typeof BadgesComponents> = {
  title: "Components/Badges",
  component: BadgesComponents,
  argTypes: {
    color: {
      control: "select",
      options: badgesColor,
    },
    value: {
      control: "text",
      defaultValue: "9999",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BadgesComponents>;

export const Badges: Story = {
  render: (props) => <BadgesComponents {...props}>9999</BadgesComponents>,
};
