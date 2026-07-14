import Image from "next/image";
import { Frame } from "@/components/Frame";

const SKILLS = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Vue 3",
  "Node.js",
  "PHP / Laravel",
  "Ruby",
  "Python",
  "AWS",
  "Docker / Terraform",
  "Elasticsearch",
  "PostgreSQL / MySQL",
  "GraphQL",
];

const EDUCATION = [
  {
    year: "2025",
    note: "M.S. Software Engineering — Universidad Nacional de La Plata",
  },
  {
    year: "2023",
    note: "M.S. DevOps — Universidad Internacional de La Rioja (Spain)",
  },
  {
    year: "2022",
    note: "Postgraduate, Project Management — Universidad Tecnológica Nacional",
  },
  {
    year: "2018",
    note: "B.A. Industrial & Product Design — Universidad de Buenos Aires",
  },
];

const CERTIFICATIONS = [
  { year: "2022", note: "UX Design Certification — Google" },
  { year: "2022", note: "Python Developer — UNIR" },
  { year: "2021", note: "UX/UI Analyst — Educación IT" },
  { year: "2019", note: "Advanced Fullstack Development — MindHub" },
];

export default function About() {
  return (
    <Frame
      active="/about"
      footer={
        <>
          <div className="marquee__item">ABOUT</div>
          <div className="marquee__item">
            <Image src="/book.svg" alt="" width={32} height={32} />
          </div>
          <div className="marquee__item">WHO I AM</div>
          <div className="marquee__item">
            <Image src="/cube.svg" alt="" width={32} height={32} />
          </div>
        </>
      }
    >
      <div className="about-grid">
        <div className="about-lede">
          <p className="font-mono-ui about-kicker">About</p>
          <h1 className="about-headline">
            I build, ship and teach on the web — from the
            <span className="text-red-500"> infrastructure</span> up to the
            <span className="text-red-500"> pixel</span>.
          </h1>
          <p className="about-body">
            I&apos;m Ariel — a developer, DevOps engineer, lecturer and product
            designer. I like the messy middle where good engineering meets
            considered design, and I care about making complex systems feel
            simple to the people who use them.
          </p>
        </div>

        <div className="about-side">
          <div className="about-block">
            <p className="font-mono-ui about-label">Stack</p>
            <ul className="about-skills font-mono-ui">
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <p className="font-mono-ui about-label">Education</p>
            <ul className="about-timeline">
              {EDUCATION.map((t) => (
                <li key={t.note}>
                  <span className="font-mono-ui about-year">{t.year}</span>
                  <span>{t.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <p className="font-mono-ui about-label">Certifications</p>
            <ul className="about-timeline">
              {CERTIFICATIONS.map((t) => (
                <li key={t.note}>
                  <span className="font-mono-ui about-year">{t.year}</span>
                  <span>{t.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}
