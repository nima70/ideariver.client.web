import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Booking from "./page"; // Adjust the import path as necessary
import { expect } from "@storybook/jest"; // You may still need this for assertions

const meta: Meta<typeof Booking> = {
  title: "Components/Booking",
  component: Booking,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Booking>;

// Default story for users to manually interact with
export const Default: Story = {};

// Test coverage for pre-filled form submission and error handling
export const FullCoverage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ================================
    // 1. Ensure form renders correctly
    // ================================
    const nameInput = await canvas.findByLabelText("Name");
    const emailInput = await canvas.findByLabelText("Email");
    const phoneInput = await canvas.findByLabelText("Phone");
    const dateInput = await canvas.findByLabelText("Date");
    const timeInput = await canvas.findByLabelText("Time");
    const messageTextarea = await canvas.findByLabelText("Message (Optional)");
    const submitButton = await canvas.findByRole("button", {
      name: /book appointment/i,
    });

    await expect(nameInput).toBeInTheDocument();
    await expect(emailInput).toBeInTheDocument();
    await expect(phoneInput).toBeInTheDocument();
    await expect(dateInput).toBeInTheDocument();
    await expect(timeInput).toBeInTheDocument();
    await expect(messageTextarea).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();

    // ================================
    // 2. Test empty form submission
    // ================================
    await userEvent.click(submitButton);
    // Here you would check for any validation errors or required field alerts
    // Example: check for required field message (assuming you have such a feature)
    const requiredFieldMessage = await canvas.findByText(
      /this field is required/i
    );
    await expect(requiredFieldMessage).toBeInTheDocument();

    // ================================
    // 3. Test invalid email format
    // ================================
    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "invalid-email-format");
    await userEvent.click(submitButton);

    // Check for an invalid email message or state
    const invalidEmailMessage = await canvas.findByText(
      /invalid email address/i
    );
    await expect(invalidEmailMessage).toBeInTheDocument();

    // ================================
    // 4. Test valid input submission
    // ================================
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.type(phoneInput, "1234567890");
    await userEvent.type(dateInput, "2024-09-30");
    await userEvent.type(timeInput, "10:30");
    await userEvent.type(messageTextarea, "Looking forward to our meeting!");

    // Submit the form
    await userEvent.click(submitButton);

    // Simulate a successful submission message or callback after form submission
    // Assuming you provide feedback after form submission (like a toast or a message)
    const successMessage = await canvas.findByText(
      /appointment booked successfully/i
    );
    await expect(successMessage).toBeInTheDocument();
  },
};

// Test coverage for invalid input cases
export const InvalidInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ================================
    // 1. Fill form with invalid inputs
    // ================================
    const emailInput = await canvas.findByLabelText("Email");
    const phoneInput = await canvas.findByLabelText("Phone");
    const dateInput = await canvas.findByLabelText("Date");
    const timeInput = await canvas.findByLabelText("Time");
    const submitButton = await canvas.findByRole("button", {
      name: /book appointment/i,
    });

    // Invalid email format
    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(submitButton);
    const invalidEmailMessage = await canvas.findByText(
      /invalid email address/i
    );
    await expect(invalidEmailMessage).toBeInTheDocument();

    // Invalid phone number format
    await userEvent.clear(phoneInput);
    await userEvent.type(phoneInput, "invalid-phone");
    await userEvent.click(submitButton);
    const invalidPhoneMessage = await canvas.findByText(
      /invalid phone number/i
    );
    await expect(invalidPhoneMessage).toBeInTheDocument();

    // Invalid date/time format (e.g., past date)
    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, "2020-01-01");
    await userEvent.click(submitButton);
    const invalidDateMessage = await canvas.findByText(/invalid date/i);
    await expect(invalidDateMessage).toBeInTheDocument();

    await userEvent.clear(timeInput);
    await userEvent.type(timeInput, "invalid-time");
    await userEvent.click(submitButton);
    const invalidTimeMessage = await canvas.findByText(/invalid time/i);
    await expect(invalidTimeMessage).toBeInTheDocument();
  },
};

// Story for valid form submission
export const ValidSubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ================================
    // 1. Fill form with valid inputs
    // ================================
    const nameInput = await canvas.findByLabelText("Name");
    const emailInput = await canvas.findByLabelText("Email");
    const phoneInput = await canvas.findByLabelText("Phone");
    const dateInput = await canvas.findByLabelText("Date");
    const timeInput = await canvas.findByLabelText("Time");
    const messageTextarea = await canvas.findByLabelText("Message (Optional)");
    const submitButton = await canvas.findByRole("button", {
      name: /book appointment/i,
    });

    // Fill with valid data
    await userEvent.type(nameInput, "Jane Doe");
    await userEvent.type(emailInput, "jane.doe@example.com");
    await userEvent.type(phoneInput, "9876543210");
    await userEvent.type(dateInput, "2024-09-30");
    await userEvent.type(timeInput, "14:00");
    await userEvent.type(messageTextarea, "Let's meet to discuss the project!");

    // Submit the form
    await userEvent.click(submitButton);

    // Check for success message or any callback action after form submission
    const successMessage = await canvas.findByText(
      /appointment booked successfully/i
    );
    await expect(successMessage).toBeInTheDocument();
  },
};
