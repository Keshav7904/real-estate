'use client';
import { useId } from 'react';
import { site } from '@/lib/config';

const V_POINTS = '13.5,18 19.1,18 23.5,33.9 27.9,18 33.5,18 26.3,44 20.7,44';
const K_POINTS = '36.5,18 42.1,18 42.1,29 49.2,18 54.5,18 46.3,30.5 54.5,44 48.6,44 42.1,33.4 42.1,44 36.5,44';

export function LogoMark({ size = 40 }: { size?: number }) {
  const uid = useId().replace(/:/g, '');
  const face = `face-${uid}`;
  const edge = `edge-${uid}`;
  const sheen = `sheen-${uid}`;
  const letter = `letter-${uid}`;
  const shadow = `shadow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      role="img"
      aria-label={`${site.name} monogram`}
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={face} x1="10" y1="6" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E9D096" />
          <stop offset="42%" stopColor="#C9A44E" />
          <stop offset="100%" stopColor="#A9822F" />
        </linearGradient>
        <linearGradient id={edge} x1="10" y1="20" x2="60" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7E6222" />
          <stop offset="100%" stopColor="#5C4718" />
        </linearGradient>
        <linearGradient id={sheen} x1="12" y1="6" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={letter} x1="14" y1="16" x2="52" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1F3A56" />
          <stop offset="100%" stopColor="#0D1B2A" />
        </linearGradient>
        <filter id={shadow} x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.8" floodColor="#0D1B2A" floodOpacity="0.32" />
        </filter>
      </defs>

      <g filter={`url(#${shadow})`}>
        {/* extruded side of the tile */}
        <rect x="5.6" y="6.4" width="60" height="60" rx="17" fill={`url(#${edge})`} />
        {/* tile face */}
        <rect x="4" y="3" width="60" height="60" rx="17" fill={`url(#${face})`} />
        <rect x="4" y="3" width="60" height="60" rx="17" fill={`url(#${sheen})`} />

        {/* land parcel plane the monogram stands on */}
        <path d="M15.5 52.4 H52.5 L48.6 55.9 H19.4 Z" fill="#6E5318" fillOpacity="0.22" />
        <path d="M15.5 52.4 H52.5" stroke="#FBF1D9" strokeOpacity="0.34" strokeWidth="0.8" />

        {/* raised monogram: offset copy reads as the extrusion */}
        <g transform="translate(1.1 1.5)" fill="#6B521C" fillOpacity="0.45">
          <polygon points={V_POINTS} />
          <polygon points={K_POINTS} />
        </g>
        <g fill={`url(#${letter})`}>
          <polygon points={V_POINTS} />
          <polygon points={K_POINTS} />
        </g>
        <g transform="translate(-0.5 -0.6)" fill="#FBF1D9" fillOpacity="0.18">
          <polygon points={V_POINTS} />
          <polygon points={K_POINTS} />
        </g>

        <rect x="4" y="3" width="60" height="60" rx="17" fill="none" stroke="#FBF1D9" strokeOpacity="0.28" strokeWidth="1" />
      </g>
    </svg>
  );
}

interface LogoProps {
  size?: number;
  tone?: 'light' | 'dark';
  withWordmark?: boolean;
}

export default function Logo({ size = 40, tone = 'dark', withWordmark = true }: LogoProps) {
  const nameColor = tone === 'light' ? '#FFFFFF' : 'var(--brand-deep)';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <LogoMark size={size} />
      {withWordmark && (
        <span style={{ display: 'block' }}>
          <span
            style={{
              display: 'block',
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: size * 0.46,
              letterSpacing: '0.2px',
              color: nameColor,
              lineHeight: 1.1,
              transition: 'color var(--transition-base)',
            }}
          >
            {site.name}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: Math.max(8.5, size * 0.23),
              letterSpacing: '1.9px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--brand-gold)',
              lineHeight: 1.2,
            }}
          >
            {site.tagline}
          </span>
        </span>
      )}
    </span>
  );
}
