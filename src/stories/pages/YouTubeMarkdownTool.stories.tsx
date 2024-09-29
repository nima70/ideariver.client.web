import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import YouTubeMarkdownForm from "../../app/pages/YouTubeMarkdownTool/page";
import { expect } from "@storybook/jest";

const meta: Meta<typeof YouTubeMarkdownForm> = {
  title: "Pages/YouTubeMarkdownForm",
  component: YouTubeMarkdownForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof YouTubeMarkdownForm>;

// Default story for users to manually interact with the form
export const Default: Story = {};

// Story pre-filled with a valid YouTube link for user to interact with
export const WithValidLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ===================
    // 1. Pre-fill the form with a valid YouTube link
    // ===================
    const youtubeInput = await canvas.findByLabelText("YouTube Link:");
    const labelInput = await canvas.findByLabelText("Optional Label:");
    const submitButton = await canvas.findByRole("button", {
      name: /generate markdown/i,
    });

    // Ensure all elements are in the document
    await expect(youtubeInput).toBeInTheDocument();
    await expect(labelInput).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();

    // ===================
    // 2. Fill the form with a valid YouTube link and an optional label
    // ===================
    await userEvent.clear(youtubeInput);
    await userEvent.type(youtubeInput, "https://youtu.be/t84rtdkWBuk");
    await userEvent.type(labelInput, "Check out this awesome video!");

    // ===================
    // 3. Submit the form
    // ===================
    await userEvent.click(submitButton);

    // ===================
    // 4. Verify that the output is generated correctly
    // ===================
    const imageAltText = "Watch the video";
    const image = await canvas.findByAltText(imageAltText);
    await expect(image).toHaveAttribute(
      "src",
      "https://img.youtube.com/vi/t84rtdkWBuk/maxresdefault.jpg"
    );

    // Check if the generated link is correct
    const link = await canvas.findByRole("link", {
      name: /Check out this awesome video!/i,
    });
    await expect(link).toHaveAttribute("href", "https://youtu.be/t84rtdkWBuk");
  },
};

// Story handling invalid YouTube link
export const WithInvalidLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ===================
    // 1. Pre-fill the form with an invalid YouTube link
    // ===================
    const youtubeInput = await canvas.findByLabelText("YouTube Link:");
    const labelInput = await canvas.findByLabelText("Optional Label:");
    const submitButton = await canvas.findByRole("button", {
      name: /generate markdown/i,
    });

    // Ensure all elements are in the document
    await expect(youtubeInput).toBeInTheDocument();
    await expect(labelInput).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();

    // ===================
    // 2. Fill the form with an invalid YouTube link and an optional label
    // ===================
    await userEvent.clear(youtubeInput);
    await userEvent.type(youtubeInput, "invalid-url");
    await userEvent.type(labelInput, "Invalid video");

    // ===================
    // 3. Submit the form
    // ===================
    await userEvent.click(submitButton);

    // ===================
    // 4. Verify that the error message is displayed for the invalid link
    // ===================
    const errorMessage = await canvas.findByText("Invalid YouTube link.");
    await expect(errorMessage).toBeInTheDocument();
  },
};
