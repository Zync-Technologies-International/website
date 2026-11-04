import { useMemo } from "react";
import { motion } from "framer-motion";

type Node = { id: number; x: number; y: number; delay: number; hub: boolean };

const COLS = 7;
const ROWS = 5;

/** Animated grid of RFID nodes that "ping" and link to a central hub. */
export default function NodeGrid() {
  const nodes = useMemo<Node[]>(() => {
    const list: Node[] = [];
    let id = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const jitterX = ((c * 37 + r * 17) % 11) - 5;
        const jitterY = ((c * 23 + r * 29) % 9) - 4;
        list.push({
          id: id++,
          x: 40 + c * 70 + jitterX,
          y: 40 + r * 70 + jitterY,
          delay: ((c * 5 + r * 3) % 9) * 0.35,
          hub: c === 3 && r === 2,
        });
      }
    }
    return list;
  }, []);

  const hub = nodes.find((n) => n.hub)!;

  return (
    <div className="glass relative mx-auto aspect-[7/5] w-full max-w-xl overflow-hidden rounded-3xl p-2 shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]">
      <svg viewBox="0 0 500 360" className="h-full w-full" role="img" aria-label="Animated RFID nodes syncing with a central hub">
        <defs>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <circle cx={hub.x} cy={hub.y} r="120" fill="url(#hubGlow)" />

        {nodes
          .filter((n) => !n.hub && (n.id % 2 === 0 || n.id % 5 === 0))
          .map((n) => (
            <motion.line
              key={`l${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={hub.x}
              y2={hub.y}
              stroke="url(#line)"
              strokeWidth="0.8"
              strokeDasharray="3 5"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: n.delay }}
            />
          ))}

        {nodes.map((n) => (
          <g key={n.id}>
            {!n.hub && (
              <circle
                cx={n.x}
                cy={n.y}
                r="6"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1"
                style={{
                  transformOrigin: `${n.x}px ${n.y}px`,
                  animation: `ping-ring 3.2s ease-out ${n.delay}s infinite`,
                }}
              />
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.hub ? 9 : 3}
              fill={n.hub ? "#10b981" : "#67e8f9"}
              style={n.hub ? { filter: "drop-shadow(0 0 10px #10b981)" } : undefined}
            />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        35 nodes synced
      </div>
    </div>
  );
}
