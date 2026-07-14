type LogoProps = {
  className?: string;
};

// "M." monogram. Mark inherits currentColor; the dot is the fixed red accent.
export const Logo = ({ className }: LogoProps) => (
  <svg
    className={className}
    viewBox="0 0 196 184.17"
    fill="none"
    role="img"
    aria-label="Ariel Moguillansky"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path d="M66.25,78.08,45.71,57.56,29.65,41.5,7.19,19a16.37,16.37,0,0,1-2.91-3.91L36.19,0,89.66,53.45Z" />
      <path d="M4.28,15.12l-2,1a.11.11,0,0,0-.06.09V170.31a.12.12,0,0,0,.07.1l16.92,6.67,16,6.32.95-.08V-.29A.12.12,0,0,0,36-.39Z" />
      <path d="M193.77,12.74,159.83,1.42h0L99.23,66.38,79.73,87.29,36.19,134l-17,18.21L2.31,170.27l-.1.11,17,6.7,16,6.32.95.37L155.13,56.26l4.68-5,0,0L176.8,33v0l13.4-14.36c.21-.22.41-.45.59-.67l.3-.39c.13-.16.26-.33.38-.5s.46-.64.68-1l.34-.59.26-.46a16.88,16.88,0,0,0,.73-1.55c.11-.26.2-.5.3-.76v0S193.77,12.73,193.77,12.74Z" />
      <path d="M193.79,12.7V87.21h-34V1.42h0l33.94,11.32S193.79,12.71,193.79,12.7Z" />
    </g>
    <circle fill="#ef4444" cx="134.03" cy="121.76" r="16.17" />
  </svg>
);
