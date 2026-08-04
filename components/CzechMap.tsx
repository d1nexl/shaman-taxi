"use client";

import { motion, useReducedMotion } from "framer-motion";

const BORDER =
  "M21,175 L77,122 L268,26 L302,17 L380,34 L498,87 L594,148 L751,218 L779,285 L566,450 L453,411 L285,452 L190,385 L72,297 Z";

const VW = 800;
const VH = 470;

type Node = { x: number; y: number; hub?: boolean };

// Order matches the `cities` array in the dictionary.
const NODES: Node[] = [
  { x: 282, y: 187, hub: true }, // Praha
  { x: 528, y: 343 }, // Brno
  { x: 716, y: 232 }, // Ostrava
  { x: 165, y: 246 }, // Plzeň
  { x: 353, y: 66 }, // Liberec
  { x: 440, y: 164 }, // Hradec Králové
  { x: 287, y: 381 }, // České Budějovice
  { x: 239, y: 85 }, // Ústí nad Labem
  { x: 108, y: 161 }, // Karlovy Vary
];

const EASE = [0.22, 1, 0.36, 1] as const;

type CzechMapProps = {
  cities: readonly string[];
  hubLabel: string;
  className?: string;
};

export function CzechMap({ cities, hubLabel, className }: CzechMapProps) {
  const reduce = useReducedMotion();
  const hub = NODES[0];
  const spokes = NODES.slice(1);

  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        role="img"
        aria-label={`${hubLabel} — ${cities.slice(1).join(", ")}`}
        className="block w-full"
        fill="none"
      >
        {/* Country outline */}
        <motion.path
          d={BORDER}
          stroke="#141414"
          strokeWidth={1.25}
          strokeLinejoin="round"
          strokeOpacity={0.28}
          vectorEffect="non-scaling-stroke"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        <path d={BORDER} fill="#B0842F" fillOpacity={0.04} />

        {/* Route lines from the Prague hub */}
        {spokes.map((node, i) => (
          <motion.line
            key={`route-${i}`}
            x1={hub.x}
            y1={hub.y}
            x2={node.x}
            y2={node.y}
            stroke="#B0842F"
            strokeWidth={1.25}
            strokeDasharray="4 5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 + i * 0.12 }}
          />
        ))}

        {/* A pulse traveling along one primary route (Prague → Brno) */}
        {!reduce && (
          <motion.circle
            r={4}
            fill="#B0842F"
            initial={{ cx: hub.x, cy: hub.y, opacity: 0 }}
            animate={{
              cx: [hub.x, spokes[0].x],
              cy: [hub.y, spokes[0].y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: 1.6,
            }}
          />
        )}

        {/* City nodes */}
        {spokes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={4.5}
            fill="#141414"
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.7 + i * 0.12 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        ))}

        {/* Prague hub — the focal point */}
        {!reduce && (
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r={10}
            fill="#B0842F"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.35, 0, 0.35], scale: [1, 2.6, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
          />
        )}
        <circle cx={hub.x} cy={hub.y} r={8} fill="#141414" />
        <circle cx={hub.x} cy={hub.y} r={3.5} fill="#B0842F" />
      </svg>

      {/* HTML label overlay — sized independently of the SVG scale, so the
          city names stay legible on small screens. Positioning lives on plain
          spans (Tailwind translate); framer only fades the whole layer in, to
          avoid its inline transform overriding the centering. */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
      >
        {spokes.map((node, i) => (
          <span
            key={`label-${i}`}
            className="absolute -translate-x-1/2 -translate-y-[165%] whitespace-nowrap font-mono text-[11px] leading-none text-ink/80"
            style={{ left: `${(node.x / VW) * 100}%`, top: `${(node.y / VH) * 100}%` }}
          >
            {cities[i + 1]}
          </span>
        ))}
        <span
          className="absolute -translate-x-1/2 translate-y-[55%] whitespace-nowrap font-display text-sm font-bold leading-none text-ink"
          style={{ left: `${(hub.x / VW) * 100}%`, top: `${(hub.y / VH) * 100}%` }}
        >
          {hubLabel}
        </span>
      </motion.div>
    </div>
  );
}
