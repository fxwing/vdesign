import type { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponents, AvatarVariants } from "fxwing";

const meta: Meta<typeof AvatarComponents> = {
  title: "Components/Avatar",
  component: AvatarComponents,
  argTypes: {
    rounded: {
      control: "select",
      options: Object.keys(AvatarVariants.variants.rounded),
    },
    size: {
      control: "select",
      options: Object.keys(AvatarVariants.variants.size),
    },
    square: {
      control: "select",
      options: Object.keys(AvatarVariants.variants.square),
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarComponents>;

export const Avatar: Story = {
  render: (props) => <AvatarComponents {...props} />,
};
