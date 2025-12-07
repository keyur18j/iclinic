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
    <header className="border-b border-brand-dark-soft bg-brand-dark text-white">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
            iClinic
          </span>
          <span className="text-xs text-gray-200 hidden sm:inline">
            AI front-desk for clinics
          </span>
        </Link>

        {/* Center/Right nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-200 hover:text-brand-gold transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side CTA */}
        <Link
          href="/book-demo"
          className="rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-black hover:bg-brand-gold-soft transition"
        >
          Book a Demo
        </Link>
      </nav>
    </header>
  );
}

