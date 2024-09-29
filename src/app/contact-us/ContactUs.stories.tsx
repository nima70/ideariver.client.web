import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice"; // Mock the reducer
import ContactUs from "./page"; // Import the ContactUs component
import { expect } from "@storybook/jest"; // Assertions

// Define the ContactState interface if not defined in your contactSlice
interface ContactState {
  loading: boolean;
  success: string | null;
  error: string | null;
}

// Mock initial Redux state
const mockStore = configureStore({
  reducer: {
    contact: contactReducer,
  },
  preloadedState: {
    contact: {
      loading: false,
      success: false,
      error: null,
    },
  },
});

const meta: Meta<typeof ContactUs> = {
  title: "Components/ContactUs",
  component: ContactUs,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ContactUs>;

// Default story for interaction
export const Default: Story = {};

// Fill form with valid inputs (without submitting)
export const FillValidInputs: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fill out form fields with valid values
    const nameInput = await canvas.findByLabelText("Name");
    const emailInput = await canvas.findByLabelText("Email");
    const messageInput = await canvas.findByLabelText("Message");

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "johndoe@example.com");
    await userEvent.type(messageInput, "This is a valid message.");

    // Validate that the inputs are correctly filled without submitting
    await expect(nameInput).toHaveValue("John Doe");
    await expect(emailInput).toHaveValue("johndoe@example.com");
    await expect(messageInput).toHaveValue("This is a valid message.");
  },
};
// Fill form with invalid inputs (without submitting)
export const FillInvalidInputs: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fill out form fields with invalid email and valid name
    const nameInput = await canvas.findByLabelText("Name");
    const emailInput = await canvas.findByLabelText("Email");

    await userEvent.type(nameInput, "Jane Doe");
    await userEvent.type(emailInput, "invalid-email");

    // Submit the form to trigger the error
    const submitButton = await canvas.findByRole("button", {
      name: /Send Message/i,
    });
    await userEvent.click(submitButton);

    // Validate that the error message is shown for invalid email
    const errorMessage = await canvas.findByText("Invalid email address");
    await expect(errorMessage).toBeInTheDocument();
  },
};
