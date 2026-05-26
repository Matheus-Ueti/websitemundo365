export function CertificationBackground() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        aria-hidden
      >
        <g mask="url(#cert-waves-mask)" fill="none">
          <path
            d="M -774.33,132 C -678.33,174.8 -486.33,325.4 -294.33,346 C -102.33,366.6 -6.33,246.4 185.67,235 C 377.67,223.6 473.67,287.2 665.67,289 C 857.67,290.8 990.8,243.6 1145.67,244 C 1300.54,244.4 1381.13,281.6 1440,291"
            stroke="rgba(210, 5, 230, 0.28)"
            strokeWidth="2"
          />
          <path
            d="M -473.78,166 C -377.78,217 -185.78,424.8 6.22,421 C 198.22,417.2 294.22,143.8 486.22,147 C 678.22,150.2 774.22,423.2 966.22,437 C 1158.22,450.8 1351.46,235 1446.22,216 C 1540.97,197 1441.24,316.8 1440,342"
            stroke="rgba(210, 5, 230, 0.22)"
            strokeWidth="2"
          />
          <path
            d="M -796.98,290 C -700.98,280.6 -508.98,244.4 -316.98,243 C -124.98,241.6 -28.98,301.2 163.02,283 C 355.02,264.8 451.02,129.2 643.02,152 C 835.02,174.8 963.63,394.6 1123.02,397 C 1282.42,399.4 1376.6,210.6 1440,164"
            stroke="rgba(210, 5, 230, 0.18)"
            strokeWidth="2"
          />
          <path
            d="M -775.32,214 C -679.32,228.8 -487.32,298.2 -295.32,288 C -103.32,277.8 -7.32,139.8 184.68,163 C 376.68,186.2 472.68,388.2 664.68,404 C 856.68,419.8 989.62,260.6 1144.68,242 C 1299.74,223.4 1380.94,297.2 1440,311"
            stroke="rgba(210, 5, 230, 0.20)"
            strokeWidth="2"
          />
        </g>
        <defs>
          <mask id="cert-waves-mask">
            <rect width="1440" height="560" fill="#ffffff" />
          </mask>
        </defs>
      </svg>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[120px]" />
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] h-[500px] rounded-full bg-violet-100/60 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] rounded-full bg-purple-50/80 blur-[80px]" />
      </div>
    </>
  )
}
