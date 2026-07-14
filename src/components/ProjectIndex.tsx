import { useState } from "react";
import Link from "next/link";
import { projects, CATEGORY_LABELS } from "@/data/projects";

export const ProjectIndex = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="project-index" onMouseLeave={() => setActive(null)}>
      <div className="project-index__head font-mono-ui">
        <span>Selected Work</span>
        <span>{projects.length.toString().padStart(2, "0")} projects</span>
      </div>

      <ul className="project-index__list">
        {projects.map((p, i) => (
          <li
            key={p.slug}
            className={`project-row ${
              active !== null && active !== i ? "is-dimmed" : ""
            } ${active === i ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="project-row__link"
              aria-label={`${p.title} — ${CATEGORY_LABELS[p.category]}`}
            >
              <span className="project-row__num font-mono-ui">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span className="project-row__title">{p.title}</span>
              <span className="project-row__category font-mono-ui">
                {CATEGORY_LABELS[p.category]}
              </span>
              <span className="project-row__year font-mono-ui">{p.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
