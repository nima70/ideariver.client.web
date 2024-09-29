import { Meta, StoryObj } from "@storybook/react";
import AboutUs from "../../app/about-us/page"; // Import the AboutUs component

const meta: Meta<typeof AboutUs> = {
  title: "Pages/AboutUs", // Places the story under Pages in the Storybook
  component: AboutUs,
  parameters: {
    layout: "fullscreen", // Optional: adjust to make the component use the full screen
  },
};

export default meta;

type Story = StoryObj<typeof AboutUs>;

// Default story rendering the AboutUs page
export const Default: Story = {};
