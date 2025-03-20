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
    e.preventDefault();
    setIsSending((prev) => !prev);
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
      .then(() => {
        alert("Message sent.");
        setFormData(initialState);
      })
      .catch(() => {
        alert("Error sending message. Please try again.");
      })
      .finally(() => setIsSending((prev) => !prev));
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] disabled:bg-gray-600"
              disabled={isSending}
            >
              {!isSending ? (
                "Send Message"
              ) : (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Sending...</span>
                </div>
              )}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
