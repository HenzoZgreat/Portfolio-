"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "../actions";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await submitContactForm(data);

      if (response.success) {
        toast.success(response.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={pending}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={pending}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={pending}
            rows={5}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
