"use client";

import { useState } from "react";
import { NavBar } from "@/components/NavBar"; // Import the NavBar component

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to your API or email)
    console.log(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* Navigation Bar */}

      <section
        id="booking"
        className="bg-card py-16 w-full animate__animated animate__fadeIn"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-card-foreground">
            Book an Appointment
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-card-foreground mb-12">
            Schedule a meeting with me to discuss your business needs and how I
            can help you achieve your goals.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-left text-card-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-left text-card-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-left text-card-foreground mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="date"
                className="text-left text-card-foreground mb-2"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="time"
                className="text-left text-card-foreground mb-2"
              >
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-left text-card-foreground mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-lg border border-muted bg-background text-foreground"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold transition-colors hover:bg-primary-dark"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
