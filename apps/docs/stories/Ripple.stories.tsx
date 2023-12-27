import type { Meta, StoryObj } from "@storybook/react";
import { Ripple as RippleComponent } from "@vdesign/ui";

const meta: Meta<typeof RippleComponent> = {
  title: "Components/Ripple",
  component: RippleComponent,
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof RippleComponent>;

export const Ripple: Story = {
  render: () => <RippleComponent className="bg-blue-400/35" />,
};
