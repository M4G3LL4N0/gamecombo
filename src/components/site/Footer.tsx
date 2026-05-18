import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>GameCombo. Original game concept generation with IP-safe remix logic.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
