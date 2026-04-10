"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className={cn(
        "group border-b border-neutral-100 dark:border-neutral-800",
        "transition-all duration-300 ease-in-out",
        isOpen ? "bg-neutral-50 dark:bg-neutral-900/50" : "hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-4 py-6"
      >
        <h3
          className={cn(
            "text-left text-sm font-bold tracking-tight uppercase transition-colors duration-200",
            "text-neutral-900 dark:text-neutral-100",
            isOpen && "text-black dark:text-white"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 135 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "shrink-0 transition-colors duration-200",
            "text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
            isOpen && "text-neutral-900 dark:text-neutral-100"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
          >
            <div className="px-4 pb-8">
              <motion.p
                initial={{ y: -4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -4, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQ() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What defines CampusHub?",
      answer:
        "CampusHub is a standardized academic repository designed for the efficient distribution and collaborative management of study materials within student communities.",
    },
    {
      question: "How is material distributed?",
      answer:
        "Registered members can initiate uploads through our protocol-based interface, categorizing materials by subject and academic period for community accessibility.",
    },
    {
      question: "What are the access requirements?",
      answer:
        "Access to the repository is free for all verified students. We maintain a strictly open-source philosophy for academic knowledge.",
    },
    {
      question: "Which formats are supported?",
      answer:
        "The protocol supports standard document formats including PDF, DOCX, and high-fidelity image captures for handwritten documentation.",
    },
    {
      question: "Is there a search function?",
      answer:
        "Yes, our search engine utilizes tag-based and metadata filtering to ensure rapid retrieval of specific academic modules.",
    },
  ]

  return (
    <section className="w-full py-32 bg-neutral-50/30 dark:bg-transparent border-y border-neutral-100 dark:border-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <motion.div className="mx-auto mb-20 max-w-4xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
            <span className="h-px w-8 bg-neutral-200" />
            Information Protocol
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-50 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-neutral-500 dark:text-neutral-400 font-medium">
            Core documentation and procedural answers for the CampusHub platform.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FAQ
