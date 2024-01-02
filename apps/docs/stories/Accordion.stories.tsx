import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as AccordionComponent } from "fxwing";

const meta: Meta<typeof AccordionComponent> = {
  title: "Components/Accordion",
  component: AccordionComponent,
  argTypes: {
    multiple: {
      control: "select",
      options: [false, true], // 设置选项为false和true
    },

    open: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionComponent>;

export const Accordion: Story = {
  render: () => (
    <AccordionComponent multiple open={[false, true]}>
      <AccordionComponent.Item>
        <AccordionComponent.Header>Item 1</AccordionComponent.Header>
        <AccordionComponent.Content>
          Content for item 1
        </AccordionComponent.Content>
      </AccordionComponent.Item>
      <AccordionComponent.Item>
        <AccordionComponent.Header>Item 2</AccordionComponent.Header>
        <AccordionComponent.Content>
          Content for item 2
        </AccordionComponent.Content>
      </AccordionComponent.Item>
    </AccordionComponent>
  ),
};
