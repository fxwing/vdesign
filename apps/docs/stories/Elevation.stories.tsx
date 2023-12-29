import type { Meta, StoryObj } from "@storybook/react";
import { Elevation as ElevationComponent } from "vdesign";

const meta: Meta<typeof ElevationComponent> = {
  title: "Components/Elevation",
  component: ElevationComponent,
  argTypes: {
    className: { control: "text" },
    level: { control: "select", options: ["0", "1", "2", "3", "4", "5"] },
  },
};

export default meta;

type Story = StoryObj<typeof ElevationComponent>;

export const Elevation: Story = {
  render: () => (
    <div className="w-5 ml-2 mt-2 h-5 absolute">
      <ElevationComponent className="bg-blue-400/35" />,
    </div>
  ),
};
