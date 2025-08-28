"use client";
import React, { useState } from 'react';

const TYPES = [
  'General Inquiry',
  'Kitchen',
  'Bathroom',
  'Living Room',
  'Bedroom',
  'Outdoor',
  'Other',
];

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    type: TYPES[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e5e7eb] to-[#f1f5f9] text-[#1e293b] flex flex-col items-center justify-center px-4 py-8">
      <div className="relative max-w-lg w-full rounded-3xl shadow-2xl p-8 bg-white/90 border-2 border-[#1e3a8a]/20 backdrop-blur-md overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#64748b]/10 rounded-full blur-2xl z-0" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] mb-2 text-center z-10">Contact Us</h1>
        <p className="text-grey mb-6 text-center z-10">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
        {submitted ? (
          <div className="text-center text-lg text-[#1e3a8a] font-bold py-8 z-10">Thank you for reaching out! We'll be in touch soon.</div>
        ) : (
          <form className="flex flex-col gap-4 z-10" onSubmit={handleSubmit} autoComplete="off">
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-lg px-4 py-2 bg-[#e5e7eb] border-2 border-[#1e3a8a] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-lg px-4 py-2 bg-[#e5e7eb] border-2 border-[#1e3a8a] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                placeholder="you@email.com"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Type</span>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="rounded-lg px-4 py-2 bg-[#e5e7eb] border-2 border-[#1e3a8a] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-lg px-4 py-2 bg-[#e5e7eb] border-2 border-[#1e3a8a] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] resize-none"
                placeholder="How can we help you?"
              />
            </label>
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-[#1e3a8a] text-white font-bold rounded-full shadow-md hover:bg-[#64748b] hover:text-white border-2 border-[#1e3a8a] hover:border-[#64748b] transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default ContactPage;
