import { MyIcon } from "../ui/icon"
const footerLinks = [
  {
    title: "Explore",
    links: [
      { text: "Browse Notes", href: "#" },
      { text: "Subjects", href: "#" },
      { text: "Popular", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "How to Upload", href: "#" },
      { text: "Guidelines", href: "#" },
      { text: "Help Center", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Privacy Policy", href: "#" },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="mt-auto block border-t border-neutral-200/80 px-2 py-12 sm:px-4 dark:border-neutral-900">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 text-sm text-neutral-400 sm:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <MyIcon className="h-5 w-5 text-black dark:text-white" />
              <span className="ml-2 text-lg font-medium text-black dark:text-white">
                CampusHub
              </span>
            </a>
          </div>
          <p className="text-xs text-neutral-600 md:text-[13px] dark:text-neutral-400">
            © {new Date().getFullYear()} CampusHub. All rights reserved.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 pb-8 sm:mt-0 sm:flex-row sm:gap-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col space-y-3">
              <h4 className="mb-4 text-sm text-neutral-900 dark:text-neutral-100">
                {section.title}
              </h4>
              <div className="flex flex-row flex-wrap space-y-3 space-x-3 sm:flex-col">
                {section.links.map((link) => (
                  <a key={link.text} href={link.href}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
