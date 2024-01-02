import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button as ButtonComponent,
  colorsList,
  sizeList,
  variantsList,
} from "fxwing";
import { EnhancedView } from "../componetns/View";

const meta: Meta<typeof ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    ref: {
      control: { type: "string" },
    },
    size: {
      control: { type: "select" },
      options: sizeList,
    },
    style: {
      control: { type: "object" },
      name: "style",
    },
    disabled: {
      control: { type: "boolean" },
      type: { name: "boolean", required: false },
    },
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: variantsList,
    },
    color: {
      control: { type: "select" },
      options: colorsList,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => (
    <EnhancedView>
      <ButtonComponent {...args}>Button</ButtonComponent>
    </EnhancedView>
  ),
};
