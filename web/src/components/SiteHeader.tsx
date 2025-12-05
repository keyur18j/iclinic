import Link from "next/link";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Business", href: "/business" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "About us", href: "/about-us" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-background/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
            iMedClinic
          </span>
          <span className="text-xs text-slate-600 dark:text-slate-400 hidden sm:inline">
            AI front-desk for clinics
          </span>
        </Link>

        {/* Center/Right nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side CTA */}
        <Link
          href="/book-demo"
          className="bg-sky-500 text-background rounded-lg px-4 py-2 text-sm font-semibold hover:bg-sky-600 transition"
        >
          Book a Demo
        </Link>
      </nav>
    </header>
  );
}

