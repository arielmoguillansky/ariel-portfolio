import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { Frame } from "@/components/Frame";
import { projects, CATEGORY_LABELS, type Project } from "@/data/projects";

type Props = {
  project: Project;
  prev: Project;
  next: Project;
};

export default function ProjectDetail({ project, prev, next }: Props) {
  return (
    <Frame
      active="/projects"
      scroll
      footer={
        <>
          <div className="marquee__item">{project.title.toUpperCase()}</div>
          <div className="marquee__item">
            <Image src="/code.svg" alt="" width={32} height={32} />
          </div>
          <div className="marquee__item">{project.title.toUpperCase()}</div>
          <div className="marquee__item">
            <Image src="/code.svg" alt="" width={32} height={32} />
          </div>
        </>
      }
    >
      <article className="detail">
        <Link href="/projects" className="detail-back font-mono-ui">
          ← Index
        </Link>

        <header className="detail-head">
          <p className="font-mono-ui detail-kicker">
            {CATEGORY_LABELS[project.category]} — {project.year}
          </p>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-overview">{project.overview}</p>
        </header>

        <div className="detail-hero" style={{ background: project.accent }}>
          {project.image ? (
            <div className="detail-browser">
              <div className="detail-browser__bar">
                <span className="detail-browser__dot" aria-hidden />
                <span className="detail-browser__dot" aria-hidden />
                <span className="detail-browser__dot" aria-hidden />
                <span className="detail-browser__url font-mono-ui">
                  {project.links.live
                    ? project.links.live
                        .replace(/^https?:\/\//, "")
                        .replace(/^www\./, "")
                        .replace(/\/$/, "")
                    : project.slug}
                </span>
              </div>
              <div className="detail-browser__view">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 66vw"
                  style={{ objectFit: "contain", objectPosition: "top" }}
                />
              </div>
            </div>
          ) : (
            <span className="detail-hero__label font-mono-ui">
              {project.title}
            </span>
          )}
        </div>

        <div className="detail-cols">
          <section className="detail-main">
            <h2 className="detail-h2 font-mono-ui">Contribution</h2>
            <ul className="detail-contrib">
              {project.contributions.map((c, i) => (
                <li key={i}>
                  <span className="font-mono-ui detail-contrib__num">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="detail-meta">
            <div className="detail-meta__row">
              <span className="font-mono-ui detail-meta__label">Role</span>
              <span>{project.role}</span>
            </div>
            <div className="detail-meta__row">
              <span className="font-mono-ui detail-meta__label">Year</span>
              <span>{project.year}</span>
            </div>
            <div className="detail-meta__row">
              <span className="font-mono-ui detail-meta__label">Stack</span>
              <span className="detail-tags font-mono-ui">
                {project.tags.map((t) => (
                  <span key={t} className="detail-tag">
                    {t}
                  </span>
                ))}
              </span>
            </div>
            <div className="detail-links font-mono-ui">
              {project.links.live && (
                <a href={project.links.live} className="detail-link">
                  Visit ↗
                </a>
              )}
              {project.links.source && (
                <a href={project.links.source} className="detail-link">
                  Source ↗
                </a>
              )}
            </div>
          </aside>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <section className="detail-gallery">
            <h2 className="detail-h2 font-mono-ui">Sale events built on the platform</h2>
            <div className="detail-gallery__grid">
              {project.gallery.map((shot) => {
                const card = (
                  <>
                    <span className="detail-gallery__shot">
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    </span>
                    <span className="detail-gallery__cap font-mono-ui">
                      {shot.label}
                      {shot.href && <span aria-hidden> ↗</span>}
                    </span>
                  </>
                );
                return shot.href ? (
                  <a
                    key={shot.src}
                    href={shot.href}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-gallery__item"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={shot.src} className="detail-gallery__item">
                    {card}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="detail-results">
          {project.results.map((r) => (
            <div key={r.label} className="detail-result">
              <span className="detail-result__metric">{r.metric}</span>
              <span className="font-mono-ui detail-result__label">
                {r.label}
              </span>
            </div>
          ))}
        </div>

        <nav className="detail-nav font-mono-ui">
          <Link href={`/projects/${prev.slug}`} className="detail-nav__link">
            <span className="detail-nav__dir">← Prev</span>
            <span className="detail-nav__title">{prev.title}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="detail-nav__link detail-nav__link--right"
          >
            <span className="detail-nav__dir">Next →</span>
            <span className="detail-nav__title">{next.title}</span>
          </Link>
        </nav>
      </article>
    </Frame>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const idx = projects.findIndex((p) => p.slug === params?.slug);
  if (idx === -1) return { notFound: true };
  const len = projects.length;
  return {
    props: {
      project: projects[idx],
      prev: projects[(idx - 1 + len) % len],
      next: projects[(idx + 1) % len],
    },
  };
};
