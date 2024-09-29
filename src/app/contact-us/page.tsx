"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "./contactSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState<string | null>(null);

  const dispatch = useDispatch() as any;
  const { loading, success, error } = useSelector(
    (state: any) => state.contact
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(validateEmail(value) ? null : "Invalid email address");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailError) {
      dispatch(sendMessage(formData));
    }
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-background w-full">
      <section className="bg-card py-16 w-full text-card-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We would love to hear from you! Whether you have a question about
            our services, need assistance, or just want to talk, we are here for
            you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-secondary p-8 rounded-lg shadow-lg text-secondary-foreground">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-lg mb-2">
                <strong>Email:</strong> ideariver.hope@gmail.com
              </p>
              <p className="text-lg mb-2">
                <strong>Phone:</strong> (437) 808-5666
              </p>
              <p className="text-lg">
                <strong>Address:</strong> Windsor, Ontario, Canada
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-lg text-secondary-foreground">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-muted-foreground"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Input
                    className="w-full p-3"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-muted-foreground"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    className="w-full p-3"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 mt-1 text-sm">{emailError}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-muted-foreground"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    className="w-full p-3"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  className="w-full p-3 hover:-translate-y-1"
                  type="submit"
                  variant={"default"}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <p className="text-green-500 text-center mt-4">
                    Your message has been sent successfully!
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-4">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
