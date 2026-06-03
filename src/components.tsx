import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type JSX,
  type ReactNode,
} from "react";
import { useReveal } from "./hooks";

/** Cycles through words with a kinetic flip-in, on its own line in the headline. */
export function RotatingWord({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`rotator ${className}`} aria-live="polite">
      <span key={i} className="rotator-word">
        {words[i]}
      </span>
    </span>
  );
}

/**
 * A creative, image-free hero visual: overlapping frosted-glass "command
 * center" cards (schedule, inbox, tasks) with cursor-driven parallax depth.
 */
export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", (((e.clientX - r.left) / r.width - 0.5)).toFixed(3));
    el.style.setProperty("--py", (((e.clientY - r.top) / r.height - 0.5)).toFixed(3));
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <div
      className="hero-stage"
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <span className="stage-ring" />

      <div className="par par-schedule">
        <div className="glass-card card-schedule">
          <div className="gc-head">
            <span className="gc-title">Today</span>
            <span className="gc-live">
              <i /> On track
            </span>
          </div>
          <ul className="gc-rows">
            <li>
              <span className="gc-dot d-red" />
              <b>09:00</b> Client strategy call
            </li>
            <li>
              <span className="gc-dot d-gold" />
              <b>11:30</b> Inbox triage
            </li>
            <li>
              <span className="gc-dot d-green" />
              <b>14:00</b> Travel booking
            </li>
          </ul>
        </div>
      </div>

      <div className="par par-inbox">
        <div className="glass-card card-inbox">
          <span className="gc-label">Inbox</span>
          <strong className="gc-big">0</strong>
          <span className="gc-sub">
            <span className="gc-check">✓</span> All caught up
          </span>
        </div>
      </div>

      <div className="par par-tasks">
        <div className="glass-card card-tasks">
          <div className="gc-head">
            <span className="gc-title sm">Tasks</span>
            <span className="gc-count">2/3</span>
          </div>
          <ul className="gc-checks">
            <li className="done">
              <span className="gc-box">✓</span>
              Schedule meetings
            </li>
            <li className="done">
              <span className="gc-box">✓</span>
              Prep weekly report
            </li>
            <li>
              <span className="gc-box" />
              Book flights
            </li>
          </ul>
          <span className="gc-bar">
            <span style={{ width: "66%" }} />
          </span>
        </div>
      </div>

      <div className="par par-chip">
        <span className="glass-chip">✦ 24h response time</span>
      </div>
    </div>
  );
}

type RevealProps = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  /** animation style */
  variant?: "up" | "left" | "right" | "scale" | "fade";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

/** Fades + slides its children in the first time they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLElement>();
  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={`reveal reveal-${variant}${shown ? " is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
}

/**
 * A card that reveals on scroll and shows a soft spotlight that follows the
 * cursor on pointer devices. Subtle, premium — no 3D gimmicks.
 */
export function SpotlightCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal variant="up" delay={delay} className={`spot-wrap ${className}`}>
      <div ref={ref} className="spot-card" onPointerMove={handleMove}>
        <span className="spot-glow" aria-hidden="true" />
        {children}
      </div>
    </Reveal>
  );
}

/** A button/link that gently follows the cursor (magnetic effect). */
export function Magnetic({
  children,
  className = "",
  href,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      {...rest}
    >
      <span className="magnetic-inner">{children}</span>
    </a>
  );
}
