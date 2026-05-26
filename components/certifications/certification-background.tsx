export function CertificationBackground() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 560"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-40"
      aria-hidden
    >
      <g mask="url(#cert-waves-mask)" fill="none">
        <path
          d="M -774.33,132 C -678.33,174.8 -486.33,325.4 -294.33,346 C -102.33,366.6 -6.33,246.4 185.67,235 C 377.67,223.6 473.67,287.2 665.67,289 C 857.67,290.8 990.8,243.6 1145.67,244 C 1300.54,244.4 1381.13,281.6 1440,291"
          stroke="rgba(210, 5, 230, 0.12)"
          strokeWidth="2"
        />
        <path
          d="M -473.78,166 C -377.78,217 -185.78,424.8 6.22,421 C 198.22,417.2 294.22,143.8 486.22,147 C 678.22,150.2 774.22,423.2 966.22,437 C 1158.22,450.8 1351.46,235 1446.22,216 C 1540.97,197 1441.24,316.8 1440,342"
          stroke="rgba(210, 5, 230, 0.08)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <mask id="cert-waves-mask">
          <rect width="1440" height="560" fill="#ffffff" />
        </mask>
      </defs>
    </svg>
  )
}
