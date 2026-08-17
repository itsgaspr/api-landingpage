import { useState } from "react";
import { MAP_VIEW, PROVINCES } from "../lib/mozambiqueMapData.js";

export default function MozambiqueMap({ className = "" }) {
  const [activeId, setActiveId] = useState(null);
  const active = PROVINCES.find((province) => province.id === activeId);

  return (
    <div className={`moz-map ${className}`}>
      <svg
        viewBox={`0 0 ${MAP_VIEW.width} ${MAP_VIEW.height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Map of Mozambique by province"
      >
        <defs>
          <linearGradient id="moz-land-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(61, 158, 106, 0.28)" />
            <stop offset="100%" stopColor="rgba(61, 158, 106, 0.08)" />
          </linearGradient>
          <linearGradient id="moz-land-active" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(77, 184, 125, 0.55)" />
            <stop offset="100%" stopColor="rgba(61, 158, 106, 0.35)" />
          </linearGradient>
          <filter id="moz-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width={MAP_VIEW.width}
          height={MAP_VIEW.height}
          fill="rgba(255,255,255,0.015)"
          rx="8"
        />

        {PROVINCES.map((province) => {
          const isActive = activeId === province.id;
          return (
            <path
              key={province.id}
              d={province.path}
              fill={isActive ? "url(#moz-land-active)" : "url(#moz-land-fill)"}
              stroke={isActive ? "rgba(125, 220, 165, 0.95)" : "rgba(61, 158, 106, 0.45)"}
              strokeWidth={isActive ? 1.1 : 0.65}
              strokeLinejoin="round"
              filter={isActive ? "url(#moz-soft-glow)" : undefined}
              className="moz-map__province"
              onMouseEnter={() => setActiveId(province.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(province.id)}
              onBlur={() => setActiveId(null)}
            >
              <title>{province.name}</title>
            </path>
          );
        })}
      </svg>

      <p className="moz-map__label">{active?.name ?? "11 provinces"}</p>
    </div>
  );
}
