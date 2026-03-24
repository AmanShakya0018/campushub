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
        "group rounded-lg border border-neutral-200 dark:border-neutral-800",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-neutral-50 dark:bg-neutral-900"
          : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-2 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-neutral-900 dark:text-neutral-100",
            isOpen && "text-primary"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            "text-neutral-500 dark:text-neutral-400",
            isOpen && "text-primary"
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
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-2 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
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
      question: "What is CampusHub?",
      answer:
        "CampusHub is a collaborative notes repository where students can upload, access, and share their study materials with classmates to excel together.",
    },
    {
      question: "How do I upload my notes?",
      answer:
        "Simply create an account, click on the upload button, select your notes file, add a title and subject, and share it with the community.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes! CampusHub is completely free for all students. You can upload and download notes without any cost.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "We support PDF, DOCX, TXT, and images (JPG, PNG). You can upload your handwritten notes as images or typed documents.",
    },
    {
      question: "Can I search for specific subjects?",
      answer:
        "Yes! You can search by subject, course, topic, or keywords to find exactly the notes you need for your studies.",
    },
    {
      question: "How do ratings and reviews work?",
      answer:
        "After downloading notes, you can rate them and leave a review to help other students find the best quality study materials.",
    },
  ]

  return (
    <section className="w-full py-24 dark:bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <motion.div className="mx-auto mb-12 max-w-7xl text-center">
          <h2 className="test-primary mx-auto mt-6 mb-2 max-w-3xl py-2 text-center text-4xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl">
            Let&apos;s Answer Your Questions
          </h2>
          <p className="test-primary mb-8 text-[0.8rem] text-balance text-muted-foreground sm:text-[0.87rem] lg:text-[1rem]">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FAQ
