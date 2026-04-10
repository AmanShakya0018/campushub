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
    <footer className="mt-auto block border-t border-neutral-100 px-2 py-20 sm:px-4 dark:border-neutral-900 bg-white dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 text-xs font-medium text-neutral-400 sm:flex-row">
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-neutral-950 text-white dark:bg-white dark:text-black">
                <MyIcon className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase italic">
                CampusHub
              </span>
            </a>
          </div>
          <p className="max-w-xs text-[10px] uppercase tracking-widest leading-loose text-neutral-500 dark:text-neutral-500">
            Standardized academic repository for the verified distribution of study materials.
            © {new Date().getFullYear()} CampusHub Protocol.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12 sm:mt-0 sm:flex-row sm:gap-20">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-900 dark:text-neutral-100">
                {section.title}
              </h4>
              <div className="flex flex-col space-y-3">
                {section.links.map((link) => (
                  <a 
                    key={link.text} 
                    href={link.href}
                    className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
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
