import { useEffect, useState } from "react";
import { RevealOnScroll } from "../ReveaolOnScroll";
import Spinner from "../Spinner";
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
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;

  useEffect(() => {
    setMessageSent(false);
    setErrorMessage("");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
      .then(() => {
        setMessageSent(true);
        setFormData(initialState);
      })
      .catch((e) => {
        setErrorMessage(
          e.message || "Error sending message. Please try again."
        );
      })
      .finally(() => setIsSending(false));
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
                  setMessageSent(false);
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
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setMessageSent(false);
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setMessageSent(false);
                }}
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

            {!messageSent && errorMessage.length === 0 && (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] disabled:bg-gray-600"
                disabled={isSending}
              >
                {!isSending ? (
                  "Send Message"
                ) : (
                  <div role="status">
                    <Spinner />
                    <span className="sr-only">Sending...</span>
                  </div>
                )}
              </button>
            )}

            {messageSent && (
              <div
                id="alert-3"
                className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <svg
                  className="shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                  Your message has been sent. Thank you.
                </div>
                <button
                  type="button"
                  className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-3"
                  aria-label="Close"
                  onClick={() => {
                    setMessageSent(false);
                    setErrorMessage("");
                  }}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      // stroke-width="2"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}

            {errorMessage.length > 0 && (
              <div
                id="alert-2"
                className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">{errorMessage}</div>
                <button
                  type="button"
                  className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-2"
                  aria-label="Close"
                  onClick={() => {
                    setErrorMessage("");
                    setMessageSent(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      // stroke-width="2"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
