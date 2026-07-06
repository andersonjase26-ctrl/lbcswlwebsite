import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/standings", label: "Standings" },
  { href: "/schedule", label: "Schedule" },
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/games", label: "Games" },
  { href: "/awards", label: "Awards" },
  { href: "/records", label: "Records" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-violet-500">
          LBCSWL
        </Link>
        <nav className="flex flex-wrap gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-300 transition hover:text-violet-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
