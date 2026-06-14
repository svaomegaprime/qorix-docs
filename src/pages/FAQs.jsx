import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "How do I create my first pop-up?",
    answer:
      "Go to your dashboard, click Create Campaign, choose your pop-up type (Standard or Spinner), customize the content, and activate it. Your pop-up will start showing on your store instantly.",
  },
  {
    question: "What types of pop-ups are available?",
    answer:
      "Qorix Popup currently supports newsletter (email capture) popups and spin-to-win (wheel) popups.",
  },
  {
    question: "How does the discount system work?",
    answer:
      "You can create or assign a discount to your pop-up campaign. Once a customer submits their email, the discount is shown instantly and can be applied at checkout.",
  },
  {
    question: "Can I control the discount value?",
    answer:
      "Yes, you can set fixed discount values such as 10% off, 15% off, and 20% off. For spin wheel campaigns, discounts are currently static and predefined.",
  },
  {
    question: "Where are the collected emails stored?",
    answer:
      "All customer emails are stored in the app dashboard under your Subscriber List, where you can view and manage them.",
  },
  {
    question: "Can I collect more than just email?",
    answer:
      "Yes. You can optionally collect the customer's name and phone number depending on how you configure your pop-up.",
  },
  {
    question: "Does the app automatically apply discounts at checkout?",
    answer:
      "No. When the customer subscribes, Qorix Popup instantly shows the discount code, which needs to be copied and applied on the checkout page.",
  },
  {
    question: "Will the pop-up affect my store's performance?",
    answer:
      "No. Qorix Popup is designed to be lightweight and optimized to ensure minimal impact on your store's speed.",
  },
  {
    question: "Can I run multiple campaigns at the same time?",
    answer:
      "Yes, you can create and manage multiple campaigns, but you should activate them strategically to avoid overlapping pop-ups.",
  },
  {
    question: "Can I customize the pop-up design?",
    answer:
      "Yes. You can customize the design of your pop-up to better match your store and campaign goals.",
  },
  {
    question: "Does Qorix Popup integrate with email marketing tools?",
    answer:
      "Currently, external integrations like Mailchimp or Klaviyo are not available.",
  },
  {
    question: "Is the app beginner-friendly?",
    answer:
      "Yes. Qorix Popup is designed to be simple and easy to use, even if you have no technical experience.",
  },
  {
    question: "What happens if I deactivate a campaign?",
    answer:
      "The pop-up will immediately stop showing on your store, and no new data will be collected.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Yes. We follow standard security practices to ensure that all collected data is protected.",
  },
  {
    question: "How can I get support?",
    answer:
      "You can contact our team through live chat in the app dashboard, the support form, or by emailing svaomegaprime@gmail.com.",
  },
  {
    question: "Can I make a pop-up for lead collection without a discount?",
    answer: "Yes, you can.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
        Frequently Asked Questions
      </h1>
      <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
        Quick answers to the most common questions about Qorix Popup.
      </p>

      <section className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-xs dark:border-stone-800 dark:bg-stone-800/50">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`px-6 py-5 ${
              index !== faqs.length - 1
                ? "border-b border-stone-200 dark:border-stone-700"
                : ""
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <h2 className="not-prose font-semibold text-stone-900 dark:text-white">
                {faq.question}
              </h2>
              <ChevronDown
                size={20}
                className={`shrink-0 text-stone-500 transition-transform dark:text-stone-400 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mb-0 mt-4 text-base leading-7 text-stone-700 dark:text-stone-300">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </>
  );
}
