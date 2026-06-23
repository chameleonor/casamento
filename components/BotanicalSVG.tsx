export function BranchCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* Main stem */}
      <path
        d="M20 280 C35 230 55 180 75 130 C95 80 120 40 145 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Branch left 1 */}
      <path
        d="M42 220 C25 200 12 188 4 178"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf on branch left 1 */}
      <path
        d="M4 178 C10 162 20 158 28 165 C22 175 10 180 4 178Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Branch right 1 */}
      <path
        d="M60 170 C80 152 95 142 106 136"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf on branch right 1 */}
      <path
        d="M106 136 C120 128 132 132 134 142 C122 142 110 142 106 136Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Branch left 2 */}
      <path
        d="M82 118 C64 105 50 96 40 88"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf cluster */}
      <path
        d="M40 88 C28 72 30 58 42 54 C48 66 46 80 40 88Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M40 88 C26 84 18 74 22 64 C32 68 38 80 40 88Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.06"
      />
      {/* Branch right 2 */}
      <path
        d="M110 70 C128 56 140 44 148 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf top */}
      <path
        d="M148 34 C160 22 172 22 176 32 C166 38 154 38 148 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Small berries */}
      <circle cx="145" cy="10" r="2.5" fill="currentColor" fillOpacity="0.25" />
      <circle cx="156" cy="6" r="1.8" fill="currentColor" fillOpacity="0.18" />
      <circle cx="135" cy="14" r="1.5" fill="currentColor" fillOpacity="0.15" />
      {/* Small leaves near top */}
      <path
        d="M120 50 C108 38 106 26 114 20 C118 30 120 42 120 50Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        fillOpacity="0.07"
      />
    </svg>
  );
}

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left line */}
      <line
        x1="0"
        y1="24"
        x2="108"
        y2="24"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />
      {/* Right line */}
      <line
        x1="172"
        y1="24"
        x2="280"
        y2="24"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />
      {/* Center rose bud */}
      <circle cx="140" cy="24" r="9" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="140" cy="24" r="4.5" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="0.6"/>
      {/* Petals */}
      <path d="M140 15 C136 19 136 29 140 33 C144 29 144 19 140 15Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.08"/>
      <path d="M131 24 C135 20 145 20 149 24 C145 28 135 28 131 24Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.08"/>
      {/* Left leaf */}
      <path d="M108 22 C114 18 122 20 124 24 C118 26 110 26 108 22Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.07"/>
      {/* Right leaf */}
      <path d="M172 22 C166 18 158 20 156 24 C162 26 170 26 172 22Z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.07"/>
      {/* Small dots */}
      <circle cx="96" cy="24" r="1.8" fill="currentColor" fillOpacity="0.25" />
      <circle cx="88" cy="24" r="1.2" fill="currentColor" fillOpacity="0.18" />
      <circle cx="184" cy="24" r="1.8" fill="currentColor" fillOpacity="0.25" />
      <circle cx="192" cy="24" r="1.2" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

export function WreathSmall({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle path suggestion */}
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="4 6"/>
      {/* Leaves around */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 60 + 42 * Math.cos(rad);
        const cy = 60 + 42 * Math.sin(rad);
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="8"
            ry="4"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
            stroke="currentColor"
            strokeWidth="0.7"
            fill="currentColor"
            fillOpacity="0.1"
          />
        );
      })}
      {/* Center text space */}
      <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.2"/>
    </svg>
  );
}

export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M40 110 C40 80 38 50 35 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M35 80 C22 68 16 55 18 44 C28 52 34 66 35 80Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1"/>
      <path d="M36 56 C50 44 58 32 54 20 C44 28 38 44 36 56Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1"/>
      <path d="M35 36 C22 26 16 14 20 4 C30 12 34 26 35 36Z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08"/>
    </svg>
  );
}
