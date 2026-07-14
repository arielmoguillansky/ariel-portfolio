import { ReactNode, useEffect, useRef, useState } from "react";

// Marquee scrolls at a constant velocity (px/second) regardless of how much
// content it holds, so every page's banner moves at the same visual pace.
// Duration is derived from the measured content width: duration = distance / speed.
const DEFAULT_SPEED = 100; // px per second

export const Marquee = ({
  children,
  speed = DEFAULT_SPEED,
}: {
  children: ReactNode;
  speed?: number;
}) => {
  const contentRef = useRef<HTMLUListElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      // The keyframe translates by (-100% - gap) = one content width + one gap.
      const distance = el.offsetWidth + getGap(el);
      if (distance > 0) setDuration(distance / speed);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [speed, children]);

  return (
    <div
      className="enable-animation marquee"
      style={
        {
          "--animation-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <ul className="marquee__content" ref={contentRef}>
        {children}
      </ul>

      <ul aria-hidden="true" className="marquee__content">
        {children}
      </ul>
    </div>
  );
};

// The gap between the two content copies lives on the parent `.marquee`.
function getGap(el: HTMLElement): number {
  const parent = el.parentElement;
  if (!parent) return 0;
  return parseFloat(getComputedStyle(parent).columnGap || "0") || 0;
}
