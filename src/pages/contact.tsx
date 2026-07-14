import Image from "next/image";
import { Frame } from "@/components/Frame";

const SOCIALS = [
  {
    label: "Email",
    value: "arielmogui92@gmail.com",
    href: "mailto:arielmogui92@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/arielmoguillansky",
    href: "https://github.com/arielmoguillansky",
  },
  {
    label: "LinkedIn",
    value: "in/arielmoguillansky",
    href: "https://linkedin.com/in/arielmoguillansky",
  },
];

export default function Contact() {
  return (
    <Frame
      active="/contact"
      footer={
        <>
          <div className="marquee__item">CONTACT</div>
          <div className="marquee__item">
            <Image src="/globe.svg" alt="" width={32} height={32} />
          </div>
          <div className="marquee__item">LET&apos;S TALK</div>
          <div className="marquee__item">
            <Image src="/code.svg" alt="" width={32} height={32} />
          </div>
        </>
      }
    >
      <div className="contact-grid">
        <div>
          <p className="font-mono-ui about-kicker">Contact</p>
          <h1 className="contact-headline">
            Have something to
            <br />
            build? <span className="text-red-500">Let&apos;s talk.</span>
          </h1>
        </div>

        <ul className="contact-list">
          {SOCIALS.map((s) => (
            <li key={s.label} className="contact-row">
              <a
                href={s.href}
                className="contact-row__link"
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="font-mono-ui contact-row__label">
                  {s.label}
                </span>
                <span className="contact-row__value">{s.value}</span>
                <span className="contact-row__arrow font-mono-ui" aria-hidden>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}
