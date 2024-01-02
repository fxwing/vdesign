import type { Meta, StoryObj } from "@storybook/react";
import { BeforeAfter as BeforeAfterComponent } from "fxwing";

const meta: Meta<typeof BeforeAfterComponent> = {
  title: "Components/BeforeAfter",
  component: BeforeAfterComponent,
  argTypes: {
    before: { control: "text" },
    after: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof BeforeAfterComponent>;

export const BeforeAfter: Story = {
  render: (props) => <BeforeAfterComponent {...props} />,
};
