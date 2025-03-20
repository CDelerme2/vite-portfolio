import { useState } from "react";
import { RevealOnScroll } from "../ReveaolOnScroll";
import emailjs from "@emailjs/browser";

const initialState = {
  from_name: "",
  to_name: "Carlos Delerme",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;

  const sendMessage = (e) => {
    setIsSending((prev) => !prev);
    e.preventDefault();
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
      .then(() => {
        setIsSending((prev) => !prev);
        alert("Message sent.");
        setFormData(initialState);
      })
      .catch(() => {
        alert("Error sending message. Please try again.");
        setIsSending((prev) => !prev);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px- w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-6" onSubmit={sendMessage}>
            <div className="relative">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
                value={formData.from_name}
                onChange={(e) => {
                  setFormData({ ...formData, from_name: e.target.value });
                }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <input
              id="to_name"
              name="to_name"
              value={formData.to_name}
              type="hidden"
            />
            <input
              id="from_email"
              name="from_email"
              value={formData.email}
              type="hidden"
            />
            {isSending ? (
              <div>Sending message...</div>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
