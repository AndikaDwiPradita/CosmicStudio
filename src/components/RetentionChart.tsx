const formatCompactID = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace('.', ',') + ' Jt'
  }
  if (num >= 10000) {
    return (num / 1000).toFixed(1).replace('.', ',') + ' Rb'
  }
  return num.toLocaleString('id-ID')
}

interface RetentionChartProps {
  video: any
  selectedPlatform: string
}

const RetentionChart: React.FC<RetentionChartProps> = ({ video, selectedPlatform }) => {
  const pts = video.retentionCurve
  const w = 350
  const h = 90
  const padL = 26
  const padR = 10
  const padT = 10
  const padB = 18
  const plotW = w - padL - padR
  const plotH = h - padT - padB

  const coords = pts.map((val: number, i: number) => {
    const x = padL + (i / (pts.length - 1)) * plotW
    const y = padT + plotH - (val / 100) * plotH
    return { x, y, val }
  })

  const linePath = coords.map((c: any, i: number) => `${i === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(' ')
  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${coords[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`
  const hookX = coords[1].x

  return (
    <svg viewBox="0 0 {w} {h}" className="w-full h-full">
      <defs>
        <linearGradient id="svRetentionGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.13)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
        </linearGradient>
      </defs>
      <text x="0" y={`${padT + 4}`} fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">100%</text>
      <text x="4" y={`${padT + plotH / 2 + 3}`} fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">50%</text>
      <line x1={padL} y1={`${padT + plotH / 2}`} x2={w - padR} y2={`${padT + plotH / 2}`} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
      <line x1={hookX} y1={padT} x2={hookX} y2={`${padT + plotH}`} stroke="rgba(255,255,255,0.22)" strokeDasharray="2 2" />
      <path d={areaPath} fill="url(#svRetentionGrad)" />
      <path d={linePath} fill="none" stroke="#E4E4E7" strokeWidth="1.9" strokeLineCap="round" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.14))' }} />
      <circle cx={coords[1].x} cy={coords[1].y} r="3.5" fill="#E4E4E7" />
      <text x={padL} y={h - 3} fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">0:00</text>
      <text x={hookX} y={h - 3} textAnchor="middle" fill="#E4E4E7" fontSize="8" fontFamily="JetBrains Mono">0:03 Hook ({video.hookRate})</text>
      <text x={w - padR} y={h - 3} textAnchor="end" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">{video.duration}</text>
    </svg>
  )
}

export { RetentionChart, formatCompactID }