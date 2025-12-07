import Link from "next/link";

const currentYear = new Date().getFullYear();

// Social media SVG icons
const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand-dark text-gray-200">
      {/* Top panel */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Left block - Brand / CTA */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-gold text-sm font-bold text-black">
                iM
              </div>
              <span className="text-xl font-semibold text-white">iClinic</span>
            </div>

            {/* Tagline pill */}
            <div>
              <span className="inline-flex items-center rounded-full border border-gray-700 px-4 py-1 text-xs text-gray-300">
                It&apos;s not magic. It&apos;s iClinic AI.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-black hover:bg-brand-gold-soft transition"
              >
                Get Started
              </Link>
              <a
                href="mailto:info@iClinic.ai"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark-soft px-4 py-2 text-sm text-gray-100 border border-gray-500 hover:bg-brand-dark transition"
              >
                info@iClinic.ai
              </a>
            </div>
          </div>

          {/* Right block - Link columns */}
          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-2">
            {/* Company column */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                Company
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Home
                </Link>
                <Link
                  href="/business"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  How it Works
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Use Cases
                </Link>
                <Link
                  href="/products"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  API
                </Link>
                <Link
                  href="/about-us"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Who we Serve column */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                Who we Serve
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Health Systems
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Specialty Groups
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Medical Billing
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Pharma
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  EMRs
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Dental
                </Link>
                <Link
                  href="/use-cases"
                  className="block text-sm text-gray-300 hover:text-brand-gold transition"
                >
                  Payors
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-dark-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 text-xs text-gray-500 md:flex-row md:justify-between">
          {/* Left - Copyright */}
          <div>
            © {currentYear} iClinic. All rights reserved.
          </div>

          {/* Right - Social icons + Privacy/Terms */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/iClinic"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-1 text-gray-400 hover:text-brand-gold transition"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.youtube.com/@iClinic"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-1 text-gray-400 hover:text-brand-gold transition"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://twitter.com/iClinic"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex items-center gap-1 text-gray-400 hover:text-brand-gold transition"
              >
                <TwitterIcon />
              </a>
            </div>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-brand-gold transition"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-brand-gold transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
