"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// Q&A pairs used for BOTH the visible accordion and the FAQPage JSON-LD.
// Keep answers short, keyword-rich, and location-aware so Google can pull
// them into featured snippets and AI assistants can quote them directly.
export const faqs = [
  {
    q: "What areas of Volusia County do you serve?",
    a: "Dazzle Divas Cleaning serves all of Volusia County, Florida, including Daytona Beach, Daytona Beach Shores, Ormond Beach, Ormond-by-the-Sea, New Smyrna Beach, Port Orange, and Ponce Inlet. If you're in the greater Daytona Beach area, we've got you covered.",
  },
  {
    q: "Do you clean Airbnb and VRBO vacation rentals?",
    a: "Yes — vacation rental turnover is our specialty. We work with Airbnb Superhosts, VRBO hosts, and property managers across Volusia County. Our average turnover is 2–4 hours, with photo verification, guest amenity checks, and review-protection cleaning standards built in.",
  },
  {
    q: "How much does a cleaning service cost?",
    a: "Pricing depends on the size of your property, the type of cleaning (turnover, deep clean, move-in/move-out), and your scheduling needs. Vacation rental turnovers start at $100. Call (386) 301-5775 or request a free quote for a custom price tailored to your property.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Dazzle Divas Cleaning LLC is fully licensed and insured in the State of Florida. We've been serving Volusia County homeowners, Airbnb hosts, and property managers since 2018.",
  },
  {
    q: "Do you offer same-day or emergency cleaning service?",
    a: "Yes. We offer same-day and emergency turnover service throughout Volusia County, with a typical 2-hour response window. Call (386) 301-5775 for urgent last-minute turnovers, guest arrival prep, or back-to-back booking cleans.",
  },
  {
    q: "Do you use eco-friendly cleaning products?",
    a: "Yes. On request, we clean with non-toxic, eco-friendly products that are safe for families, guests, and pets. Just let us know when you book and we'll use our green cleaning kit.",
  },
  {
    q: "How do I book a cleaning?",
    a: "The fastest way is to call or text (386) 301-5775. You can also email info@dazzledivascleaning.com or use the contact form on our website — we respond within 24 hours with a custom quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, check, credit card, Venmo, and Zelle. For recurring property managers and Airbnb hosts, we can set up monthly invoicing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold border border-pink-200 mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>

          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Cleaning Questions,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
              Answered
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about booking Dazzle Divas Cleaning for
            your Volusia County home or vacation rental.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-pink-300 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between text-left px-6 py-5 group"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-6 group-hover:text-pink-600 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-pink-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Don&apos;t see your question? Give us a call — we&apos;re happy to
            talk through your property.
          </p>
          <a
            href="tel:+13863015775"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
          >
            Call (386) 301-5775
          </a>
        </motion.div>
      </div>
    </section>
  );
}
