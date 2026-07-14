import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Secondary tier shown in the mobile menu footer.
const MENU_LINKS = [
  { label: "Email", href: "mailto:arielmogui92@gmail.com" },
  { label: "GitHub", href: "https://github.com/arielmoguillansky" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arielmoguillansky" },
];

// Footer belt: a binary bitstream flowing server → computer. Built
// deterministically (no randomness) so SSR and client markup match, then
// rendered twice so the -50% scroll loops seamlessly.
const BIT_SEED =
  "10110100 01101001 1 00101110 011 10010 1101 00110101 1001 010 11100011 ";
// One "tile" must be wider than the strip or the -50% loop shows an empty
// gap, so repeat the seed a few times; the tile is rendered twice below so
// the scroll wraps seamlessly.
const bitRand = (n: number) =>
  ((n * 1103515245 + 12345) % 2147483648) / 2147483648;

const BIT_UNIT = BIT_SEED.repeat(6).split("").map((c, i) => ({
  char: c === " " ? " " : c,
  cls: c === " " ? "" : i % 7 === 0 ? "flick" : i % 3 === 0 ? "dim" : "",
  // Flickering digits blink on their own clock - varied duration + phase.
  style:
    c !== " " && i % 7 === 0
      ? {
          animationDuration: `${(0.7 + bitRand(i) * 2).toFixed(2)}s`,
          animationDelay: `${(-bitRand(i + 1) * 3).toFixed(2)}s`,
        }
      : undefined,
}));
const BITS = [...BIT_UNIT, ...BIT_UNIT];

const DEFAULT_FOOTER = (
  <>
    <div className="marquee__item">DEVELOPER</div>
    <div className="marquee__item">
      <Image src="/code.svg" alt="" width={32} height={32} />
    </div>
    <div className="marquee__item">DEVOPS</div>
    <div className="marquee__item">
      <Image src="/devops.svg" alt="" width={32} height={32} />
    </div>
    <div className="marquee__item">LECTURER</div>
    <div className="marquee__item">
      <Image src="/book.svg" alt="" width={32} height={32} />
    </div>
    <div className="marquee__item">PRODUCT DESIGNER</div>
    <div className="marquee__item">
      <Image src="/cube.svg" alt="" width={32} height={32} />
    </div>
  </>
);

type FrameProps = {
  children: ReactNode;
  active?: string;
  footer?: ReactNode;
  /** Let the page grow beyond the viewport and scroll (e.g. detail pages). */
  scroll?: boolean;
};

export const Frame = ({
  children,
  active,
  footer,
  scroll = false,
}: FrameProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div
      className={`container-grid w-full ${
        scroll ? "container-grid--scroll lg:min-h-screen" : "lg:h-screen"
      }`}
    >
      <div className="top" />

      {/* Desktop header */}
      <header className="hidden header lg:flex justify-between p-4 items-center">
        <Link href="/" className="font-mono-ui text-sm tracking-tight">
          Ariel Moguillansky
        </Link>
        <nav className="flex gap-x-6 font-mono-ui text-sm uppercase tracking-wider">
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`nav-link ${active === n.href ? "nav-link--active" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile navbar — expands from the 72px bar to full height on open */}
      <div
        id="mobile-menu"
        className={`mobile-menu lg:hidden ${menuOpen ? "is-open" : ""}`}
      >
        <div className="mobile-menu__bar">
          <Link
            href="/"
            className="font-mono-ui mobile-menu__brand"
            onClick={() => setMenuOpen(false)}
          >
            Ariel M.
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="mobile-toggle font-mono-ui"
          >
            <span className="mobile-toggle__icon" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              style={{ "--i": i } as React.CSSProperties}
              className={`mobile-menu__link ${
                active === n.href ? "is-active" : ""
              }`}
            >
              <span className="mobile-menu__num font-mono-ui">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span className="mobile-menu__label">{n.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__footer font-mono-ui">
          <span className="mobile-menu__footer-label">Get in touch</span>
          <div className="mobile-menu__socials">
            {MENU_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="body">{children}</div>

      <div className="left-pad" />
      <div className="right-pad" />
      <div className="bottom" />
      <div className="bottom-belt" />
      <div className="bottom-belt-content">
        <div className="belt-signal" aria-hidden="true">
          <div className="belt-bits font-mono-ui">
            {BITS.map((b, i) => (
              <span key={i} className={b.cls} style={b.style}>
                {b.char}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-belt-end" />
      <div className="left-belt" />
      <div className="right-belt" />
      <div className="left-corner" />
      <div className="right-corner" />

      {/* Footer belt: an HTTP packet stream travelling server → computer */}
      <div className="belt-node belt-node--server" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <rect x="3" y="13" width="18" height="7" rx="1.5" />
          <line x1="6.5" y1="7.5" x2="6.5" y2="7.5" />
          <line x1="6.5" y1="16.5" x2="6.5" y2="16.5" />
        </svg>
      </div>
      <div className="belt-node belt-node--computer" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="13" rx="1.5" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>

      <div className="footer enable-animation">
        <Marquee>{footer ?? DEFAULT_FOOTER}</Marquee>
      </div>
    </div>
  );
};
