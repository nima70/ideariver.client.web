// src/stories/RootLayout.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import RootLayout from "../../app/layout"; // Import the RootLayout component
import { menuItems } from "../../app/config/menuItems"; // Use the mock menuItems
import "../../app/globals.css"; // Import your global styles and animations if needed
import Home from "../../app/page"; // Import the Home component
// Define the metadata for the story
const meta: Meta<typeof RootLayout> = {
  title: "Pages/Home",
  component: RootLayout,
  parameters: {
    layout: "fullscreen", // Storybook's layout parameter to remove padding
  },
};

export default meta; // Export the metadata

type Story = StoryObj<typeof RootLayout>;

// Story for the RootLayout with mock children
export const Default: Story = {
  render: () => <RootLayout>{<Home />}</RootLayout>,
  parameters: {
    // Mock menuItems
    menuItems: menuItems,
  },
};
