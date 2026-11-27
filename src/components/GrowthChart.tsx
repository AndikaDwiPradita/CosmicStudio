import React from 'react'

const formatCompactID = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace('.', ',') + ' Jt'
  }
  if (num >= 10000) {
    return (num / 1000).toFixed(1).replace('.', ',') + ' Rb'
  }
  return num.toLocaleString('id-ID')
}

interface GrowthChartProps {
  dataset: { labels: string[], values: number[] }
  granularity: 'hourly' | 'daily'
  metricUnit: string
  activeNodeIndex: number
  onNodeActivate: (idx: number, label: string, value: string) => void
}

const GrowthChart: React.FC<GrowthChartProps> = ({
  dataset,
  granularity,
  metricUnit,
  activeNodeIndex,
  onNodeActivate
}) => {
  const svgW = 350
  const svgH = 152
  const padL = 10
  const padR = 10
  const padT = 26
  const padB = 22
  const plotW = svgW - padL - padR
  const plotH = svgH - padT - padB

  const minVal = Math.min(...dataset.values) * 0.85
  const maxVal = Math.max(...dataset.values) * 1.05
  const range = maxVal - minVal || 1

  const points = dataset.values.map((val: number, idx: number) => {
    const x = padL + (idx / (dataset.values.length - 1)) * plotW
    const y = padT + plotH - ((val - minVal) / range) * plotH
    return { x, y, val, label: dataset.labels[idx] }
  })

  const linePath = points.map((pt: any, i: number) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${points[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`

  const gridLines = [0, 0.5, 1].map((ratio: number) => {
    const y = padT + plotH * ratio
    return `<line x1="${padL}" y1="${y}" x2="${svgW - padR}" y2="${y}" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />`
  }).join('')

  const xLabels = points.map((pt: any) => (
    `<text x="${pt.x.toFixed(1)}" y="${svgH - 4}" textAnchor="middle" fill="#71717A" fontSize="9" fontFamily="JetBrains Mono, monospace">${pt.label}</text>`
  )).join('')

  const metricUnitDisplay = selectedPlatform === 'x' ? 'Impresi' : selectedPlatform === 'instagram' ? 'Plays' : 'Views'

  const nodesHTML = points.map((pt: any, idx: number) => {
    const formatted = `${formatCompactID(pt.val)} ${metricUnitDisplay}`
    const isCurrent = idx === activeNodeIndex
    return `
      <g class="cursor-pointer" onClick={() => onNodeActivate(idx, pt.label, formatted)} onMouseEnter={() => onNodeActivate(idx, pt.label, formatted)}>
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" fill="transparent" />
        <circle
          id="vchart-node-${idx}"
          cx="${pt.x.toFixed(1)}"
          cy="${pt.y.toFixed(1)}"
          r="${isCurrent ? '4.5' : '3'}"
          fill="${isCurrent ? '#E4E4E7' : '#0A0A0C'}"
          stroke="#E4E4E7"
          strokeWidth="1.8"
        />
      </g>
    `
  }).join('')

  return (
    <svg viewBox="0 0 {svgW} {svgH}" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="singleVideoAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.14)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
        </linearGradient>
      </defs>
      {gridLines}
      <path d={areaPath} fill="url(#singleVideoAreaGrad)" />
      <path
        d={linePath}
        fill="none"
        stroke="#E4E4E7"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLineJoin="round"
        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.16))' }}
      />
      {xLabels}
      {nodesHTML}
    </svg>
  )
}

export { GrowthChart, formatCompactID }