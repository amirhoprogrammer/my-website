"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  familyname: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    familyname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        toast.success("send your message successfully");
        setFormData({ name: "", familyname: "", email: "", message: "" });
      } else {
        setStatus("error");
        toast.error("error in send message");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md px-2 mb-2 bg-foreground mx-2 rounded-md py-2"
    >
      <div>
        <label className="block mb-1 text-command">name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
          required
          className="w-full border p-2 rounded border-command text-command"
        />
      </div>
      <div>
        <label className="block mb-1 text-command">familyname</label>
        <input
          type="text"
          name="familyname"
          value={formData.familyname}
          onChange={handleChange}
          placeholder="familyname"
          required
          className="w-full border p-2 rounded border-command text-command"
        />
      </div>
      <div>
        <label className="block mb-1 text-command">email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          required
          className="w-full border p-2 rounded border-command text-command"
        />
      </div>
      <div>
        <label className="block mb-1 text-command">massege</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="message"
          rows={5}
          className="w-full border p-2 rounded border-command text-command"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-command text-foreground px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "is sendeing..." : "send message"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-command">send message seccessfully✓</p>
      )}
      {status === "error" && (
        <p className="text-error">Error sending message. Please try again.</p>
      )}
    </form>
  );
}
