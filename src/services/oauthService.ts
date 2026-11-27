import { PER_PLATFORM_ANALYTICS } from '../data/analyticsData'

// App State Management
export const appState = {
  activeTab: 'analitik' as 'studio' | 'analitik' | 'antrean' | 'akun',
  videoLoaded: false,
  videoType: null as 'demo' | 'local' | null,
  videoPlaying: true,
  videoMeta: {
    name: 'nexus_setup_2026.mp4',
    resolution: '1080x1920 • 60fps',
    sizeDuration: '24.8 MB • 00:45'
  },
  scheduleMode: 'now' as 'now' | 'schedule',
  customCaptionsEnabled: false,
  activeCustomCaptionPlatform: null as string | null,
  customCaptions: {} as Record<string, string>,
  pendingOAuthPlatformId: null as string | null,
  pendingDisconnectPlatformId: null as string | null,
  queueFilter: 'all' as 'all' | 'proses' | 'selesai' | 'gagal',
  analyticsState: {
    selectedPlatform: 'youtube' as keyof typeof PER_PLATFORM_ANALYTICS,
    timeframe: '28H' as '7H' | '28H' | '90H',
    sortBy: 'newest' as 'newest' | 'views' | 'engagement',
    selectedVideoId: null as string | null,
    chartGranularity: 'daily' as 'hourly' | 'daily',
    activeNodeIndex: 6
  },
  platforms: [
    {
      id: 'youtube',
      name: 'YouTube',
      shortName: 'YouTube',
      handle: '@andikadev',
      followers: '128,4 Rb Subscriber',
      demoConnectHandle: '@andikadev',
      demoFollowers: '128,4 Rb Subscriber',
      connected: true,
      selected: true,
      apiLabel: 'YouTube Data API v3'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      shortName: 'TikTok',
      handle: '@andika.builds',
      followers: '214,6 Rb Pengikut',
      demoConnectHandle: '@andika.builds',
      demoFollowers: '214,6 Rb Pengikut',
      connected: true,
      selected: true,
      apiLabel: 'Content Posting API v2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortName: 'Instagram',
      handle: '@andika.studio',
      followers: '94,2 Rb Pengikut',
      demoConnectHandle: '@andika.studio',
      demoFollowers: '94,2 Rb Pengikut',
      connected: true,
      selected: true,
      apiLabel: 'Meta Graph API v21'
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      shortName: 'X',
      handle: '@andikadp',
      followers: '48,9 Rb Pengikut',
      demoConnectHandle: '@andikadp',
      demoFollowers: '48,9 Rb Pengikut',
      connected: true,
      selected: true,
      apiLabel: 'X API v2 Chunked'
    }
  ],
  queueItems: [
    {
      id: 'job-204',
      title: 'Teaser Produk v2.4 — Monochrome Edition',
      timestamp: 'Baru saja • Worker Aktif',
      overallStatus: 'PROSES',
      targets: [
        { platformId: 'tiktok', status: 'SELESAI', progress: 100, note: 'Tayang • @andika.builds' },
        { platformId: 'youtube', status: 'PROSES', progress: 74, note: 'Memproses HD (74%)...' },
        { platformId: 'instagram', status: 'PROSES', progress: 56, note: 'Mengunggah Reels (56%)...' },
        { platformId: 'x', status: 'SELESAI', progress: 100, note: 'Tayang • @andikadp' }
      ]
    },
    {
      id: 'job-203',
      title: 'Setup Meja Kerja Minimalis OLED 2026',
      timestamp: 'Hari ini • 03:40 WIB',
      overallStatus: 'GAGAL',
      targets: [
        { platformId: 'tiktok', status: 'SELESAI', progress: 100, note: 'Tayang • 342,8 Rb views' },
        { platformId: 'youtube', status: 'SELESAI', progress: 100, note: 'Tayang • 186,2 Rb views' },
        { platformId: 'instagram', status: 'GAGAL', progress: 65, note: 'Meta Graph Timeout (504)' }
      ]
    },
    {
      id: 'job-202',
      title: 'Tutorial Integrasi API Multi-Platform',
      timestamp: 'Besok • 19:30 WIB',
      overallStatus: 'TERJADWAL',
      targets: [
        { platformId: 'youtube', status: 'TERJADWAL', progress: 100, note: 'Scheduled via API v3' },
        { platformId: 'tiktok', status: 'TERJADWAL', progress: 100, note: 'Siap tayang terjadwal' },
        { platformId: 'instagram', status: 'TERJADWAL', progress: 100, note: 'Container siap tayang' },
        { platformId: 'x', status: 'TERJADWAL', progress: 100, note: 'Scheduled post aktif' }
      ]
    },
    {
      id: 'job-201',
      title: '3 Ekstensi VS Code yang Mempercepat Refactoring Backend',
      timestamp: 'Kemarin • 20:00 WIB',
      overallStatus: 'SELESAI',
      targets: [
        { platformId: 'youtube', status: 'SELESAI', progress: 100, note: 'Tayang • 142,9 Rb views' },
        { platformId: 'tiktok', status: 'SELESAI', progress: 100, note: 'Tayang • 219,4 Rb views' },
        { platformId: 'instagram', status: 'SELESAI', progress: 100, note: 'Tayang • 98,6 Rb plays' },
        { platformId: 'x', status: 'SELESAI', progress: 100, note: 'Tayang • 71,2 Rb impresi' }
      ]
    }
  ]
}

// Format helper
export const formatCompactID = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace('.', ',') + ' Jt'
  }
  if (num >= 10000) {
    return (num / 1000).toFixed(1).replace('.', ',') + ' Rb'
  }
  return num.toLocaleString('id-ID')
}

// Tab Navigation
export const switchTab = (tabName: string) => {
  // Update app state
  ;(appState as any).activeTab = tabName

  const tabs = ['studio', 'analitik', 'antrean', 'akun']
  const elements = document.querySelectorAll<HTMLElement>('[id^="nav-"]')

  tabs.forEach(t => {
    const section = document.getElementById(`tab-${t}`)
    const indicator = document.getElementById(`nav-indicator-${t}`)
    const icon = document.getElementById(`nav-icon-${t}`)
    const text = document.getElementById(`nav-text-${t}`)

    if (t === tabName) {
      section?.classList.remove('hidden')
      indicator?.classList.remove('opacity-0')
      icon?.classList.remove('text-zinc-500')
      icon?.classList.add('text-zinc-100', 'neon-icon-subtle')
      text?.classList.remove('text-zinc-500', 'font-medium')
      text?.classList.add('text-zinc-100', 'font-bold', 'neon-text-subtle')
    } else {
      section?.classList.add('hidden')
      indicator?.classList.add('opacity-0')
      icon?.classList.add('text-zinc-500')
      icon?.classList.remove('text-zinc-100', 'neon-icon-subtle')
      text?.classList.add('text-zinc-500', 'font-medium')
      text?.classList.remove('text-zinc-100', 'font-bold', 'neon-text-subtle')
    }
  })

  document.getElementById('main-scroll')?.scrollTo({ top: 0, behavior: 'smooth' })
}

// Non-blocking Toast Banner
export const showToast = (message: string) => {
  const container = document.getElementById('toast-container') as HTMLElement
  if (!container) return

  const toast = document.createElement('div')
  toast.className = 'px-4 py-2.5 rounded-full bg-[#111111]/95 backdrop-blur-xl border border-white/[0.22] text-xs font-semibold text-zinc-100 neon-halo-soft flex items-center gap-2 transition-all duration-300 transform translate-y-[-8px] opacity-0'
  toast.innerHTML = `
    <span class="w-1.5 h-1.5 rounded-full neon-dot-subtle shrink-0"></span>
    <span>${message}</span>
  `
  container.appendChild(toast)

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-[-8px]', 'opacity-0')
  })

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-[-8px]')
    setTimeout(() => toast.remove(), 300)
  }, 2800)
}

// Studio Logic
export const renderStudioPlatforms = () => {
  const grid = document.getElementById('studio-platforms-grid') as HTMLDivElement | null
  if (!grid) return

  const connectedPlatforms = appState.platforms.filter((p: any) => p.connected)

  grid.innerHTML = connectedPlatforms.map((p: any) => {
    const isSelected = p.selected
    return `
      <button
        type="button"
        onclick="togglePlatformSelection('${p.id}')"
        class="p-3 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border ${
          isSelected
            ? 'bg-[#111111] neon-card-active'
            : 'bg-[#0A0A0A] border-hairline opacity-60 hover:opacity-90'
        }"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            isSelected ? 'bg-[#E4E4E7] text-[#09090B]' : 'bg-[#151515] text-zinc-400'
          }">
            ${PLATFORM_SVGS[p.id]}
          </div>
          <div class="min-w-0">
            <p class="text-xs font-bold text-zinc-100 truncate ${isSelected ? 'neon-text-subtle' : ''}">${p.shortName}</p>
            <p class="font-mono text-[10px] text-zinc-500 truncate">${p.handle}</p>
          </div>
        </div>

        <div class="w-4 h-4 rounded-full flex items-center justify-center shrink-0 ml-1.5 border ${
          isSelected ? 'bg-[#E4E4E7] border-[#E4E4E7] text-[#09090B]' : 'border-zinc-700 bg-transparent'
        }">
          ${isSelected ? `<svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>` : ''}
        </div>
      </button>
    `
  }).join('')

  if (appState.customCaptionsEnabled) {
    renderCustomCaptionsTabs()
  }
  updateHeaderAndCTA()
}

export const togglePlatformSelection = (platformId: string) => {
  const platform = appState.platforms.find((p: any) => p.id === platformId)
  if (!platform || !platform.connected) return
  platform.selected = !platform.selected
  renderStudioPlatforms()
}

export const updateCaptionCount = () => {
  const val = document.getElementById('post-caption')?.value || ''
  ;(document.getElementById('caption-counter') as HTMLSpanElement | null)?.textContent = `${val.length} / 2200`
}

export const appendHashtag = (tag: string) => {
  const textarea = document.getElementById('post-caption') as HTMLTextAreaElement | null
  if (!textarea) return
  const current = textarea.value.trim()
  if (!current.includes(tag)) {
    textarea.value = current ? `${current} ${tag}` : tag
    updateCaptionCount()
  }
}

export const toggleCustomCaptions = () => {
  const toggleBtn = document.getElementById('custom-caption-toggle') as HTMLButtonElement | null
  const knob = document.getElementById('custom-caption-knob') as HTMLElement | null
  const container = document.getElementById('custom-captions-container') as HTMLDivElement | null

  if (!toggleBtn || !knob || !container) return

  appState.customCaptionsEnabled = !appState.customCaptionsEnabled
  toggleBtn.setAttribute('aria-checked', String(appState.customCaptionsEnabled))

  if (appState.customCaptionsEnabled) {
    toggleBtn.classList.remove('bg-[#141414]')
    toggleBtn.classList.add('bg-[#E4E4E7]')
    knob.classList.remove('bg-zinc-500')
    knob.classList.add('bg-[#09090B]', 'translate-x-5')
    container.classList.remove('hidden')
    renderCustomCaptionsTabs()
  } else {
    toggleBtn.classList.add('bg-[#141414]')
    toggleBtn.classList.remove('bg-[#E4E4E7]')
    knob.classList.add('bg-zinc-500')
    knob.classList.remove('bg-[#09090B]', 'translate-x-5')
    container.classList.add('hidden')
  }
}

export const selectCustomCaptionTab = (platformId: string) => {
  appState.activeCustomCaptionPlatform = platformId
  renderCustomCaptionsTabs()
}

export const renderCustomCaptionsTabs = () => {
  const container = document.getElementById('custom-captions-container') as HTMLDivElement | null
  if (!container) return

  const selectedPlatforms = appState.platforms.filter((p: any) => p.connected && p.selected)

  if (selectedPlatforms.length === 0) {
    container.innerHTML = `<p class="text-[11px] text-zinc-500 italic">Pilih minimal 1 akun tujuan di atas untuk mengatur caption khusus.</p>`
    return
  }

  if (!appState.activeCustomCaptionPlatform || !selectedPlatforms.some((p: any) => p.id === appState.activeCustomCaptionPlatform)) {
    appState.activeCustomCaptionPlatform = selectedPlatforms[0].id
  }

  const activePlatform = selectedPlatforms.find((p: any) => p.id === appState.activeCustomCaptionPlatform)

  const tabsHTML = selectedPlatforms.map((p: any) => {
    const isActive = p.id === activePlatform.id
    return `
      <button
        type="button"
        onclick="selectCustomCaptionTab('${p.id}')"
        class="px-2.5 py-1.5 rounded-lg font-mono text-[10px] flex items-center gap-1.5 border transition ${
          isActive
            ? 'bg-[#18181B] border-white/25 text-zinc-100 font-bold'
            : 'bg-[#111111] border-hairline text-zinc-500 hover:text-zinc-300'
        }"
      >
        <span class="w-3 h-3 inline-flex items-center justify-center">${PLATFORM_SVGS[p.id]}</span>
        <span>${p.shortName}</span>
      </button>
    `
  }).join('')

  container.innerHTML = `
    <div class="flex flex-wrap gap-1.5">${tabsHTML}</div>
    <textarea
      rows="2"
      oninput="appState.customCaptions['${activePlatform.id}'] = this.value"
      placeholder="Tulis override caption khusus untuk ${activePlatform.name}..."
      class="w-full px-3 py-2 rounded-xl bg-[#111111] border border-hairline focus:border-white/30 focus:outline-none text-xs text-zinc-200 placeholder-zinc-600 resize-none"
    >${appState.customCaptions[activePlatform.id] || ''}</textarea>
  `
}

export const setScheduleMode = (mode: string) => {
  appState.scheduleMode = mode
  const btnNow = document.getElementById('btn-mode-now') as HTMLButtonElement | null
  const btnSched = document.getElementById('btn-mode-schedule') as HTMLButtonElement | null
  const schedInputs = document.getElementById('schedule-inputs') as HTMLDivElement | null

  if (!btnNow || !btnSched || !schedInputs) return

  if (mode === 'now') {
    btnNow.className = 'py-2 px-3 rounded-lg text-xs font-bold bg-[#E4E4E7] text-[#09090B] neon-halo-soft transition'
    btnSched.className = 'py-2 px-3 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition'
    schedInputs.classList.add('hidden')
  } else {
    btnSched.className = 'py-2 px-3 rounded-lg text-xs font-bold bg-[#E4E4E7] text-[#09090B] neon-halo-soft transition'
    btnNow.className = 'py-2 px-3 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition'
    schedInputs.classList.remove('hidden')
  }
  updateHeaderAndCTA()
}

export const updateHeaderAndCTA = () => {
  const connectedCount = appState.platforms.filter((p: any) => p.connected).length
  const selectedCount = appState.platforms.filter((p: any) => p.connected && p.selected).length

  ;(document.getElementById('header-active-count') as HTMLSpanElement | null)?.textContent = `${connectedCount} AKUN AKTIF`

  const ctaBtn = document.getElementById('btn-publish-cta') as HTMLButtonElement | null
  const ctaLabel = document.getElementById('cta-label') as HTMLSpanElement | null

  if (!ctaBtn || !ctaLabel) return

  if (selectedCount === 0) {
    ctaBtn.disabled = true
    ctaLabel.textContent = 'Pilih Minimal 1 Platform'
  } else {
    ctaBtn.disabled = false
    const actionWord = appState.scheduleMode === 'now' ? 'Publikasikan ke' : 'Jadwalkan ke'
    ctaLabel.textContent = `${actionWord} ${selectedCount} Platform`
  }
}

export const handlePublishSubmit = () => {
  const selectedPlatforms = appState.platforms.filter((p: any) => p.connected && p.selected)
  if (selectedPlatforms.length === 0) {
    showToast('Pilih minimal 1 akun platform tujuan')
    return
  }

  if (!appState.videoLoaded) {
    ;(window as any).loadDemoVideo()
  }

  const titleInput = document.getElementById('post-title') as HTMLInputElement | null
  const jobTitle = titleInput?.value.trim() || 'Minimalist OLED Coding Desk Setup 2026'
  const isScheduled = appState.scheduleMode === 'schedule'
  const schedDate = document.getElementById('schedule-date')?.value || ''
  const schedTime = document.getElementById('schedule-time')?.value || '19:30'

  const newJob = {
    id: 'job-' + Date.now(),
    title: jobTitle,
    timestamp: isScheduled ? `Jadwal • ${schedDate} (${schedTime} WIB)` : 'Baru saja • Worker Aktif',
    overallStatus: 'PROSES',
    isScheduledJob: isScheduled,
    targets: selectedPlatforms.map((p: any) => ({
      platformId: p.id,
      status: 'PROSES',
      progress: 12,
      note: 'Mengunggah ke Cloud Storage...'
    }))
  }

  appState.queueItems.unshift(newJob)
  appState.queueFilter = 'all'
  renderQueueList()
  ;(window as any).switchTab('antrean')
  ;(document.getElementById('nav-queue-dot') as HTMLSpanElement | null)?.classList.remove('hidden')
  showToast(`Memulai distribusi ke ${selectedPlatforms.length} platform...`)

  ;(window as any).runJobProgressSimulation(newJob, schedTime)
}

// Analytics Logic
export const renderAnalyticsScreen = () => {
  const { selectedVideoId } = appState.analyticsState
  const platformView = document.getElementById('analytics-platform-view') as HTMLDivElement | null
  const detailView = document.getElementById('analytics-video-detail-view') as HTMLDivElement | null

  if (!platformView || !detailView) return

  if (selectedVideoId) {
    platformView.classList.add('hidden')
    detailView.classList.remove('hidden')
    renderSingleVideoDeepDive()
  } else {
    detailView.classList.add('hidden')
    platformView.classList.remove('hidden')
    renderPlatformSwitcherTabs()
    renderPlatformChannelOverview()
    renderPlatformVideosList()
  }
}

export const selectAnalyticsPlatform = (platformId: string) => {
  appState.analyticsState.selectedPlatform = platformId
  appState.analyticsState.selectedVideoId = null
  appState.analyticsState.activeNodeIndex = 6
  renderAnalyticsScreen()
}

export const setChannelTimeframe = (tf: string) => {
  appState.analyticsState.timeframe = tf
  renderPlatformChannelOverview()
}

export const setVideoSortOrder = (sortKey: string) => {
  appState.analyticsState.sortBy = sortKey as 'newest' | 'views' | 'engagement'
  ;(document.getElementById('sort-newest') as HTMLButtonElement | null)?.classList.remove('bg-[#E4E4E7]', 'text-[#09090B]', 'font-bold')
  ;(document.getElementById('sort-newest') as HTMLButtonElement | null)?.classList.add('font-semibold', 'text-zinc-400', 'hover:text-zinc-200')
  ;(document.getElementById('sort-views') as HTMLButtonElement | null)?.classList.remove('bg-[#E4E4E7]', 'text-[#09090B]', 'font-bold')
  ;(document.getElementById('sort-views') as HTMLButtonElement | null)?.classList.add('font-semibold', 'text-zinc-400', 'hover:text-zinc-200')
  ;(document.getElementById('sort-engagement') as HTMLButtonElement | null)?.classList.remove('bg-[#E4E4E7]', 'text-[#09090B]', 'font-bold')
  ;(document.getElementById('sort-engagement') as HTMLButtonElement | null)?.classList.add('font-semibold', 'text-zinc-400', 'hover:text-zinc-200')

  if (sortKey === 'newest') {
    ;(document.getElementById('sort-newest') as HTMLButtonElement | null)?.className = 'py-1.5 px-2 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  } else if (sortKey === 'views') {
    ;(document.getElementById('sort-views') as HTMLButtonElement | null)?.className = 'py-1.5 px-2 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  } else if (sortKey === 'engagement') {
    ;(document.getElementById('sort-engagement') as HTMLButtonElement | null)?.className = 'py-1.5 px-2 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  }

  renderPlatformVideosList()
}

export const renderPlatformSwitcherTabs = () => {
  const container = document.getElementById('analytics-platform-tabs') as HTMLDivElement | null
  if (!container) return

  const selectedId = appState.analyticsState.selectedPlatform
  const order = ['youtube', 'tiktok', 'instagram', 'x'] as (keyof typeof PER_PLATFORM_ANALYTICS)[]

  container.innerHTML = order.map(pid => {
    const item = PER_PLATFORM_ANALYTICS[pid]
    const isActive = pid === selectedId
    return `
      <button
        type="button"
        onclick="selectAnalyticsPlatform('${pid}')"
        class="p-2.5 rounded-2xl border text-left transition flex flex-col items-center justify-center gap-1 ${
          isActive ? 'bg-[#111114] neon-card-active' : 'bg-[#0A0A0C] border-hairline opacity-65 hover:opacity-100'
        }"
      >
        <div class="w-7 h-7 rounded-xl flex items-center justify-center ${
          isActive ? 'bg-[#E4E4E7] text-[#09090B]' : 'bg-[#141418] text-zinc-400'
        }">
          ${PLATFORM_SVGS[pid]}
        </div>
        <span class="text-[11px] font-bold ${isActive ? 'text-zinc-100 neon-text-subtle' : 'text-zinc-400'}">${item.name}</span>
        <span class="font-mono text-[9px] text-zinc-500 truncate max-w-full">${item.handle}</span>
      </button>
    `
  }).join('')
}

export const renderPlatformChannelOverview = () => {
  const card = document.getElementById('analytics-channel-card') as HTMLDivElement | null
  if (!card) return

  const { selectedPlatform, timeframe } = appState.analyticsState
  const pData = PER_PLATFORM_ANALYTICS[selectedPlatform]
  const liveAccount = appState.platforms.find((p: any) => p.id === selectedPlatform)
  const isOAuthConnected = liveAccount ? liveAccount.connected : true
  const metrics = pData.channelTimeframes[timeframe]

  const tfButtons = ['7H', '28H', '90H'].map(tf => {
    const active = tf === timeframe
    return `
      <button
        type="button"
        onclick="setChannelTimeframe('${tf}')"
        class="px-2 py-1 rounded-lg font-mono text-[10px] transition ${
          active ? 'bg-[#E4E4E7] text-[#09090B] font-bold' : 'text-zinc-400 hover:text-zinc-200 font-semibold'
        }"
      >
        ${tf}
      </button>
    `
  }).join('')

  const summaryColumns = metrics.map((m: any) => (
    `<div class="p-2.5 rounded-xl bg-[#111114] border border-hairline space-y-1">
      <span class="text-[10px] text-zinc-400 block truncate">${m.label}</span>
      <span class="text-sm font-extrabold text-zinc-100 neon-text-subtle block">${m.value}</span>
      <span class="inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#18181D] text-zinc-300">${m.delta}</span>
    </div>`
  )).join('')

  card.innerHTML = `
    <div class="flex items-start justify-between gap-2">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-10 h-10 rounded-2xl bg-[#111114] border border-white/[0.15] flex items-center justify-center text-zinc-100 shrink-0 neon-halo-soft">
          ${PLATFORM_SVGS[selectedPlatform]}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <h3 class="text-sm font-bold text-zinc-100 truncate">${pData.name}</h3>
            <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#111114] border border-hairline font-mono text-[9px] text-zinc-300">
              <span class="w-1.5 h-1.5 rounded-full ${isOAuthConnected ? 'neon-dot-subtle animate-subtle-pulse' : 'bg-zinc-600'}"></span>
              ${isOAuthConnected ? 'OAUTH AKTIF' : 'TERPUTUS'}
            </span>
          </div>
          <p class="font-mono text-[11px] text-zinc-400 truncate mt-0.5">${pData.handle} • <span class="text-zinc-300 font-semibold">${pData.followerCount}</span></p>
        </div>
      </div>

      <div class="flex items-center gap-0.5 p-1 rounded-xl bg-[#111114] border border-hairline shrink-0">
        ${tfButtons}
      </div>
    </div>

    <div class="grid grid-cols-3 gap-2 pt-0.5">
      ${summaryColumns}
    </div>
  `
}

export const renderPlatformVideosList = () => {
  const { selectedPlatform, sortBy } = appState.analyticsState
  const pData = PER_PLATFORM_ANALYTICS[selectedPlatform]

  const getPlatformName = (): string => {
    switch (selectedPlatform) {
      case 'youtube': return 'YouTube'
      case 'tiktok': return 'TikTok'
      case 'instagram': return 'Instagram'
      case 'x': return 'X'
      default: return 'Unknown'
    }
  }

  document.getElementById('platform-videos-heading')?.textContent = `Semua Konten ${getPlatformName()}`
  document.getElementById('platform-videos-count')?.textContent = `${pData.videos.length} VIDEO`

  const sortedVideos = [...pData.videos].sort((a: any, b: any) => {
    if (sortBy === 'views') return b.sortViews - a.sortViews
    if (sortBy === 'engagement') return b.sortEngagement - a.sortEngagement
    return b.timestampOrder - a.timestampOrder
  })

  const listContainer = document.getElementById('platform-videos-list') as HTMLDivElement | null
  if (!listContainer) return

  const listHTML = sortedVideos.map((vid: any, idx: number) => {
    const isWide = vid.aspect === '16:9'
    const statsHTML = vid.inlineStats.map((st: any) => (
      `<div>
        <span class="font-mono text-[8px] text-zinc-500 uppercase block">${st.label}</span>
        <span class="font-mono text-[11px] font-bold text-zinc-200">${st.value}</span>
      </div>`
    )).join('')

    return `
      <button
        type="button"
        onclick="openSingleVideoAnalytics('${vid.id}')"
        class="w-full text-left rounded-2xl bg-[#0A0A0C] border border-hairline hover:border-white/[0.24] p-3.5 space-y-3 transition active:scale-[0.99]"
      >
        <div class="flex gap-3 items-start">
          <div class="relative ${isWide ? 'w-[104px] h-[62px]' : 'w-[64px] h-[94px]'} rounded-xl bg-[#111114] border border-white/[0.12] shrink-0 overflow-hidden flex flex-col justify-between p-1.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-[8px] px-1 rounded bg-black/85 text-zinc-300">${vid.aspect}</span>
              <span class="font-mono text-[8px] text-zinc-500">#0${idx + 1}</span>
            </div>

            <div class="flex items-end justify-center gap-[2px] h-5 opacity-70">
              <span class="w-[2px] h-2.5 bg-zinc-500 rounded-full"></span>
              <span class="w-[2px] h-4 bg-zinc-200 rounded-full"></span>
              <span class="w-[2px] h-3 bg-zinc-400 rounded-full"></span>
              <span class="w-[2px] h-5 bg-zinc-100 rounded-full"></span>
              <span class="w-[2px] h-2.5 bg-zinc-500 rounded-full"></span>
            </div>

            <span class="font-mono text-[8px] text-center bg-black/85 rounded py-0.5 text-zinc-200">${vid.duration}</span>
          </div>

          <div class="flex-1 min-w-0 space-y-1.5">
            <h4 class="text-xs font-bold text-zinc-100 line-clamp-2 leading-snug">${vid.title}</h4>
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-[10px] text-zinc-500">${vid.publishDate}</span>
              <span class="font-mono text-[10px] font-semibold text-zinc-300">Detail →</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-1.5 pt-2.5 border-t border-hairline">
          ${statsHTML}
        </div>
      </button>
    `
  }).join('')

  listContainer.innerHTML = listHTML
}

// Open Dedicated Single-Video Deep-Dive Analytics Screen
export const openSingleVideoAnalytics = (videoId: string) => {
  appState.analyticsState.selectedVideoId = videoId
  appState.analyticsState.chartGranularity = 'daily'
  appState.analyticsState.activeNodeIndex = 6
  renderAnalyticsScreen()
  ;(document.getElementById('main-scroll') as HTMLDivElement | null)?.scrollTo({ top: 0, behavior: 'smooth' })
}

export const closeSingleVideoAnalytics = () => {
  appState.analyticsState.selectedVideoId = null
  renderAnalyticsScreen()
  ;(document.getElementById('main-scroll') as HTMLDivElement | null)?.scrollTo({ top: 0, behavior: 'smooth' })
}

export const setVideoChartGranularity = (granularity: string) => {
  appState.analyticsState.chartGranularity = granularity as 'hourly' | 'daily'
  ;(document.getElementById('vcg-hourly') as HTMLButtonElement | null)?.classList.remove('bg-[#E4E4E7]', 'text-[#09090B]', 'font-bold')
  ;(document.getElementById('vcg-hourly') as HTMLButtonElement | null)?.classList.add('font-semibold', 'text-zinc-400', 'hover:text-zinc-200')
  ;(document.getElementById('vcg-daily') as HTMLButtonElement | null)?.classList.remove('font-semibold', 'text-zinc-400', 'hover:text-zinc-200')
  ;(document.getElementById('vcg-daily') as HTMLButtonElement | null)?.className = 'px-2 py-1 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'

  if (granularity === 'hourly') {
    ;(document.getElementById('vcg-hourly') as HTMLButtonElement | null)?.className = 'px-2 py-1 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  } else {
    ;(document.getElementById('vcg-daily') as HTMLButtonElement | null)?.className = 'px-2 py-1 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  }

  renderSingleVideoGrowthChart()
}

export const renderSingleVideoDeepDive = () => {
  const { selectedPlatform, selectedVideoId } = appState.analyticsState
  const pData = PER_PLATFORM_ANALYTICS[selectedPlatform]
  const video = pData.videos.find((v: any) => v.id === selectedVideoId)
  if (!video) return

  // 1. Back button & Platform pill
  ;(document.getElementById('back-button-label') as HTMLSpanElement | null)?.textContent = `← Semua Video ${pData.name}`
  ;(document.getElementById('single-video-platform-pill') as HTMLDivElement | null)?.innerHTML = `
    <span class="w-3.5 h-3.5 inline-flex items-center justify-center text-zinc-200">${PLATFORM_SVGS[selectedPlatform]}</span>
    <span>${pData.handle}</span>
  `

  // 2. Single-Video Preview Header Card
  const isWide = video.aspect === '16:9'
  ;(document.getElementById('single-video-header-card') as HTMLDivElement | null)?.innerHTML = `
    <div class="flex gap-3.5 items-center">
      <div class="relative ${isWide ? 'w-[112px] h-[68px]' : 'w-[68px] h-[102px]'} rounded-xl bg-[#111114] border border-white/[0.16] shrink-0 overflow-hidden flex flex-col justify-between p-1.5">
        <span class="font-mono text-[8px] px-1 rounded bg-black/85 text-zinc-300 self-start">${video.aspect}</span>
        <div class="flex items-end justify-center gap-[2px] h-5 opacity-80">
          <span class="w-[2px] h-3 bg-zinc-400 rounded-full"></span>
          <span class="w-[2px] h-5 bg-zinc-100 rounded-full"></span>
          <span class="w-[2px] h-3.5 bg-zinc-300 rounded-full"></span>
          <span class="w-[2px] h-5 bg-zinc-100 rounded-full"></span>
          <span class="w-[2px] h-2.5 bg-zinc-500 rounded-full"></span>
        </div>
        <span class="font-mono text-[8px] text-center bg-black/85 rounded py-0.5 text-zinc-200">${video.duration}</span>
      </div>

      <div class="flex-1 min-w-0 space-y-1.5">
        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#111114] border border-hairline font-mono text-[9px] text-zinc-300">
          <span class="w-1.5 h-1.5 rounded-full neon-dot-subtle"></span> PUBLIKASI ${video.publishDate.toUpperCase()}
        </span>
        <h3 class="text-xs font-bold text-zinc-100 leading-snug">${video.title}</h3>
        <p class="font-mono text-[10px] text-zinc-500">Durasi ${video.duration} • Format ${video.aspect}</p>
      </div>
    </div>
  `

  // 3. 6 Platform-Native KPI Cards (2x3 Grid)
  ;(document.getElementById('single-video-kpi-subtitle') as HTMLSpanElement | null)?.textContent = `${pData.name.toUpperCase()} NATIVE KPI`
  ;(document.getElementById('single-video-kpi-grid') as HTMLDivElement | null)?.innerHTML = video.kpis.map((kpi: any) => `
    <div class="rounded-2xl bg-[#0A0A0C] border border-hairline p-3.5 space-y-2">
      <div class="flex items-center justify-between gap-1 text-zinc-400">
        <span class="text-[11px] font-medium truncate">${kpi.label}</span>
        <span class="w-6 h-6 rounded-lg bg-[#111114] border border-hairline flex items-center justify-center text-zinc-300 shrink-0">
          ${KPI_ICONS[kpi.key] || KPI_ICONS.views}
        </span>
      </div>
      <div class="text-base font-extrabold tracking-tight text-zinc-100 neon-text-subtle">
        ${kpi.value}
      </div>
      <span class="inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#111114] border border-hairline text-zinc-400">
        ${kpi.badge}
      </span>
    </div>
  `).join('')

  // 4. Interactive Growth Chart
  renderSingleVideoGrowthChart()

  // 5. Audience Retention Curve (SVG)
  ;(document.getElementById('sv-retention-summary') as HTMLSpanElement | null)?.textContent = video.completionSummary
  ;(document.getElementById('sv-hook-badge') as HTMLSpanElement | null)?.textContent = `Hook 3d: ${video.hookRate}`
  renderSingleVideoRetentionCurve(video)

  // 6. Platform-Specific Traffic Sources Breakdown
  ;(document.getElementById('sv-traffic-platform-tag') as HTMLSpanElement | null)?.textContent = pData.trafficTag
  ;(document.getElementById('single-video-traffic-list') as HTMLDivElement | null)?.innerHTML = video.trafficSources.map((src: any, i: number) => `
    <div class="space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <span class="text-zinc-300 font-medium">${src.source}</span>
        <span class="font-mono text-[11px] font-bold text-zinc-100">${src.pct}%</span>
      </div>
      <div class="w-full h-1.5 rounded-full bg-[#111114] overflow-hidden border border-hairline">
        <div
          class="h-full rounded-full ${i === 0 ? 'bg-[#E4E4E7] neon-halo-soft' : i === 1 ? 'bg-zinc-400' : 'bg-zinc-600'}"
          style="width: ${src.pct}%"
        ></div>
      </div>
    </div>
  `).join('')
}

// Growth Chart Renderer
export const renderSingleVideoGrowthChart = () => {
  const { selectedPlatform, selectedVideoId, chartGranularity, activeNodeIndex } = appState.analyticsState
  const pData = PER_PLATFORM_ANALYTICS[selectedPlatform]
  const video = pData.videos.find((v: any) => v.id === selectedVideoId)
  if (!video) return

  const dataset = chartGranularity === 'hourly' ? video.growthHourly : video.growthDaily
  const wrapper = document.getElementById('single-video-growth-chart') as HTMLDivElement | null
  if (!wrapper) return

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

  const metricUnit = selectedPlatform === 'x' ? 'Impresi' : selectedPlatform === 'instagram' ? 'Plays' : 'Views'

  const nodesHTML = points.map((pt: any, idx: number) => {
    const formatted = `${formatCompactID(pt.val)} ${metricUnit}`
    const isCurrent = idx === activeNodeIndex
    return `
      <g class="cursor-pointer" onClick={() => activateVideoChartNode(idx, pt.label, formatted)} onMouseEnter={() => activateVideoChartNode(idx, pt.label, formatted)}>
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

  wrapper.innerHTML = `
    <svg viewBox="0 0 ${svgW} ${svgH}" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="singleVideoAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.14)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
        </linearGradient>
      </defs>
      ${gridLines}
      <path d="${areaPath}" fill="url(#singleVideoAreaGrad)" />
      <path
        d="${linePath}"
        fill="none"
        stroke="#E4E4E7"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLineJoin="round"
        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.16))' }}
      />
      ${xLabels}
      ${nodesHTML}
    </svg>
  `

  const safeIdx = Math.min(activeNodeIndex, points.length - 1)
  const activePt = points[safeIdx]
  activateVideoChartNode(safeIdx, activePt.label, `${formatCompactID(activePt.val)} ${metricUnit}`)
}

export const activateVideoChartNode = (idx: number, labelStr: string, valueStr: string) => {
  appState.analyticsState.activeNodeIndex = idx
  ;(document.getElementById('vct-label') as HTMLSpanElement | null)?.textContent = labelStr
  ;(document.getElementById('vct-value') as HTMLSpanElement | null)?.textContent = valueStr

  for (let i = 0; i < 7; i++) {
    const node = document.getElementById(`vchart-node-${i}`)
    if (node) {
      node.setAttribute('r', i === idx ? '4.5' : '3')
      node.setAttribute('fill', i === idx ? '#E4E4E7' : '#0A0A0C')
    }
  }
}

// Retention Curve Renderer
export const renderSingleVideoRetentionCurve = (video: any) => {
  const wrapper = document.getElementById('single-video-retention-svg') as HTMLDivElement | null
  if (!wrapper) return

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

  wrapper.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" className="w-full h-full">
      <defs>
        <linearGradient id="svRetentionGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.13)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
        </linearGradient>
      </defs>
      <text x="0" y="${padT + 4}" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">100%</text>
      <text x="4" y="${padT + plotH / 2 + 3}" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">50%</text>
      <line x1="${padL}" y1="${padT + plotH / 2}" x2="${w - padR}" y2="${padT + plotH / 2}" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
      <line x1="${hookX}" y1="${padT}" x2="${hookX}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.22)" strokeDasharray="2 2" />
      <path d="${areaPath}" fill="url(#svRetentionGrad)" />
      <path d="${linePath}" fill="none" stroke="#E4E4E7" strokeWidth="1.9" strokeLineCap="round" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.14))' }} />
      <circle cx="${coords[1].x}" cy="${coords[1].y}" r="3.5" fill="#E4E4E7" />
      <text x="${padL}" y="${h - 3}" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">0:00</text>
      <text x="${hookX}" y="${h - 3}" textAnchor="middle" fill="#E4E4E7" fontSize="8" fontFamily="JetBrains Mono">0:03 Hook (${video.hookRate})</text>
      <text x="${w - padR}" y="${h - 3}" textAnchor="end" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono">${video.duration}</text>
    </svg>
  `
}

// Queue Logic
export const setQueueFilter = (filter: string) => {
  appState.queueFilter = filter as 'all' | 'proses' | 'selesai' | 'gagal'
  ;(document.getElementById('qf-all') as HTMLButtonElement | null)?.className = 'py-1.5 rounded-lg font-mono text-[10px] font-bold bg-[#E4E4E7] text-[#09090B] transition'
  ;(document.getElementById('qf-proses') as HTMLButtonElement | null)?.className = 'py-1.5 rounded-lg font-mono text-[10px] font-semibold text-zinc-400 hover:text-zinc-200 transition'
  ;(document.getElementById('qf-selesai') as HTMLButtonElement | null)?.className = 'py-1.5 rounded-lg font-mono text-[10px] font-semibold text-zinc-400 hover:text-zinc-200 transition'
  ;(document.getElementById('qf-gagal') as HTMLButtonElement | null)?.className = 'py-1.5 rounded-lg font-mono text-[10px] font-semibold text-zinc-400 hover:text-zinc-200 transition'

  renderQueueList()
}

export const renderQueueList = () => {
  const container = document.getElementById('queue-list-container') as HTMLDivElement | null
  if (!container) return

  ;(document.getElementById('queue-total-badge') as HTMLSpanElement | null)?.textContent = `${appState.queueItems.length} TUGAS`

  const f = appState.queueFilter
  const filtered = appState.queueItems.filter((job: any) => {
    if (f === 'all') return true
    if (f === 'proses') return job.overallStatus === 'PROSES' || job.overallStatus === 'TERJADWAL'
    if (f === 'selesai') return job.overallStatus === 'SELESAI'
    if (f === 'gagal') return job.overallStatus === 'GAGAL'
    return true
  })

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="rounded-2xl bg-[#0A0A0A] border border-hairline p-8 text-center">
        <p class="text-xs font-semibold text-zinc-400">Tidak ada tugas pada filter ini</p>
      </div>
    `
    return
  }

  const targetsHTML = filtered.map((job: any) => {
    let badge = ''
    if (job.overallStatus === 'PROSES') {
      badge = `<span class="px-2 py-0.5 rounded-md bg-[#E4E4E7] text-[#09090B] font-mono text-[10px] font-extrabold">MEMPROSES</span>`
    } else if (job.overallStatus === 'SELESAI') {
      badge = `<span class="px-2 py-0.5 rounded-md bg-[#141414] border border-white/[0.16] font-mono text-[10px] font-bold text-zinc-200">SELESAI</span>`
    } else if (job.overallStatus === 'TERJADWAL') {
      badge = `<span class="px-2 py-0.5 rounded-md bg-[#141414] border border-hairline font-mono text-[10px] font-semibold text-zinc-300">TERJADWAL</span>`
    } else {
      badge = `<span class="px-2 py-0.5 rounded-md bg-black border border-dashed border-white/30 font-mono text-[10px] font-bold text-zinc-200">GAGAL SEBAGIAN</span>`
    }

    const targetsHTML = job.targets.map((t: any) => {
      const platform = appState.platforms.find((p: any) => p.id === t.platformId)
      const pName = platform ? platform.shortName : t.platformId
      const isFailed = t.status === 'GAGAL'
      const isProcessing = t.status === 'PROSES'

      return `
        <div class="p-2.5 rounded-xl bg-[#111111] border ${isFailed ? 'border-white/25 border-dashed' : 'border-hairline'} space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-6 h-6 rounded-lg bg-[#18181B] flex items-center justify-center text-zinc-200">
                ${PLATFORM_SVGS[t.platformId]}
              </span>
              <div class="min-w-0">
                <p class="text-xs font-bold text-zinc-100 truncate">${pName}</p>
                <p class="font-mono text-[10px] ${isFailed ? 'text-zinc-200 font-semibold' : 'text-zinc-500'} truncate">${t.note}</p>
              </div>
            </div>

            ${isFailed
              ? `<button type="button" onclick="retryFailedTarget('${job.id}', '${t.platformId}')" class="px-2.5 py-1.5 rounded-lg neon-btn-primary font-mono text-[10px] font-extrabold shrink-0">
                  Coba Lagi (Retry)
               </button>`
              : `<span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded text-zinc-300">${t.status}</span>`
            }
          </div>

          <div class="w-full h-1.5 rounded-full bg-black overflow-hidden border border-white/[0.06]">
            <div
              class="h-full rounded-full transition-all duration-300 ${
                isProcessing ? 'progress-bar-subtle' : isFailed ? 'bg-zinc-600' : 'bg-[#E4E4E7]'
              }"
              style="width: ${t.progress}%"
            ></div>
          </div>
        </div>
      `
    }).join('')

    return `
      <div class="rounded-2xl bg-[#0A0A0A] border ${job.overallStatus === 'PROSES' ? 'neon-card-active' : 'border-hairline'} p-4 space-y-3">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <h3 class="text-sm font-bold text-zinc-100 truncate">${job.title}</h3>
            <p class="font-mono text-[10px] text-zinc-500 mt-0.5">${job.timestamp}</p>
          </div>
          <div class="shrink-0">${badge}</div>
        </div>

        <div class="space-y-2">
          ${targetsHTML}
        </div>
      </div>
    `
  }).join('')

  container.innerHTML = targetsHTML
}

export const retryFailedTarget = (jobId: string, platformId: string) => {
  const job = appState.queueItems.find((j: any) => j.id === jobId)
  if (!job) return
  const target = job.targets.find((t: any) => t.platformId === platformId)
  if (!target) return

  target.status = 'PROSES'
  target.progress = 25
  target.note = 'Menghubungkan ulang API...'
  job.overallStatus = 'PROSES'
  renderQueueList()
  showToast('Mengulang unggahan ke API platform...')

  const retryInterval = setInterval(() => {
    target.progress = Math.min(100, target.progress + 25)
    if (target.progress < 100) {
      target.note = `Mengunggah ulang (${target.progress}%)...`
    } else {
      target.status = 'SELESAI'
      target.note = 'Tayang • Berhasil setelah Retry'
      job.overallStatus = 'SELESAI'
      clearInterval(retryInterval)
      showToast('Retry berhasil! Video kini tayang.')
    }
    renderQueueList()
  }, 380)
}

// OAuth 2.0 Logic
export const renderOAuthAccounts = () => {
  const list = document.getElementById('oauth-accounts-list') as HTMLDivElement | null
  if (!list) return

  list.innerHTML = appState.platforms.map((p: any) => {
    if (p.connected) {
      return `
        <div class="rounded-2xl bg-[#0A0A0A] border border-white/[0.16] p-4 space-y-3 transition">
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-2xl bg-[#E4E4E7] text-[#09090B] flex items-center justify-center shrink-0">
                ${PLATFORM_SVGS[p.id]}
              </div>
              <div class="min-w-0">
                <h3 class="text-sm font-bold text-zinc-100 truncate">${p.name}</h3>
                <p class="font-mono text-xs text-zinc-300 truncate">${p.handle}</p>
                <p class="font-mono text-[10px] text-zinc-500 mt-0.5">${p.followers}</p>
              </div>
            </div>

            <button
              type="button"
              onclick="openDisconnectModal('${p.id}')"
              class="px-3 py-2 rounded-xl bg-[#111111] hover:bg-[#191919] border border-hairline text-[11px] font-semibold text-zinc-300 transition shrink-0 active:scale-95"
            >
              Putuskan
            </button>
          </div>

          <div class="pt-2.5 border-t border-hairline flex items-center justify-between">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#111111] border border-white/[0.1]">
              <span class="w-1.5 h-1.5 rounded-full neon-dot-subtle animate-subtle-pulse"></span>
              <span class="font-mono text-[10px] font-semibold tracking-wider text-zinc-200">AKTIF • AUTO-REFRESH</span>
            </div>
            <span class="font-mono text-[10px] text-zinc-500">${p.apiLabel}</span>
          </div>
        `
    } else {
      return `
        <div class="rounded-2xl bg-[#0A0A0A] border border-hairline p-4 flex items-center justify-between gap-3 transition hover:border-white/[0.16]">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-2xl bg-[#111111] border border-hairline text-zinc-500 flex items-center justify-center shrink-0">
              ${PLATFORM_SVGS[p.id]}
            </div>
            <div class="min-w-0">
              <h3 class="text-sm font-bold text-zinc-300 truncate">${p.name}</h3>
              <p class="font-mono text-[10px] text-zinc-500 mt-0.5">BELUM TERHUBUNG</p>
            </div>
          </div>

          <button
            type="button"
            onclick="openOAuthModal('${p.id}')"
            class="px-3.5 py-2.5 rounded-xl neon-btn-primary text-xs font-extrabold shrink-0"
          >
            Hubungkan Akun
          </button>
        `
    }
  }).join('')
}

export const openOAuthModal = (platformId: string) => {
  const platform = appState.platforms.find((p: any) => p.id === platformId)
  if (!platform) return

  appState.pendingOAuthPlatformId = platformId
  ;(document.getElementById('oauth-modal-icon') as HTMLElement | null)?.innerHTML = PLATFORM_SVGS[platformId]
  ;(document.getElementById('oauth-modal-title') as HTMLHeadingElement | null)?.textContent = `Izinkan NEXUS // POST mengakses akun ${platform.name} Anda?`
  ;(document.getElementById('oauth-modal-subtitle') as HTMLParagraphElement | null)?.textContent = `Otorisasi Resmi via ${platform.apiLabel}`
  ;(document.getElementById('oauth-modal') as HTMLDivElement | null)?.classList.remove('hidden')
}

export const closeOAuthModal = () => {
  appState.pendingOAuthPlatformId = null
  ;(document.getElementById('oauth-modal') as HTMLDivElement | null)?.classList.add('hidden')
}

export const approveOAuthConnection = () => {
  const platformId = appState.pendingOAuthPlatformId
  if (!platformId) return

  const btn = document.getElementById('btn-oauth-approve') as HTMLButtonElement | null
  if (!btn) return

  btn.innerHTML = `<span class="font-mono text-[11px]">MENGHUBUNGKAN...</span>`
  btn.disabled = true

  setTimeout(() => {
    const platform = appState.platforms.find((p: any) => p.id === platformId)
    if (platform) {
      platform.connected = true
      platform.selected = true
      platform.handle = platform.demoConnectHandle
      platform.followers = platform.demoFollowers
    }

    btn.innerHTML = `<span>Izinkan Akses</span>`
    btn.disabled = false
    closeOAuthModal()

    renderOAuthAccounts()
    renderStudioPlatforms()
    if (appState.activeTab === 'analitik' && !appState.analyticsState.selectedVideoId) {
      renderPlatformChannelOverview()
    }
    showToast(`${platform.name} (${platform.handle}) berhasil terhubung!`)
  }, 600)
}

export const openDisconnectModal = (platformId: string) => {
  const platform = appState.platforms.find((p: any) => p.id === platformId)
  if (!platform) return
  appState.pendingDisconnectPlatformId = platformId
  ;(document.getElementById('disconnect-modal-title') as HTMLHeadingElement | null)?.textContent = `Putuskan Koneksi ${platform.name}?`
  ;(document.getElementById('disconnect-modal') as HTMLDivElement | null)?.classList.remove('hidden')
}

export const closeDisconnectModal = () => {
  appState.pendingDisconnectPlatformId = null
  ;(document.getElementById('disconnect-modal') as HTMLDivElement | null)?.classList.add('hidden')
}

export const confirmDisconnectAccount = () => {
  const platformId = appState.pendingDisconnectPlatformId
  const platform = appState.platforms.find((p: any) => p.id === platformId)
  if (platform) {
    platform.connected = false
    platform.selected = false
    platform.handle = ''
    platform.followers = ''
    showToast(`Koneksi ${platform.name} diputus`)
  }
  closeDisconnectModal()
  renderOAuthAccounts()
  renderStudioPlatforms()
  if (appState.activeTab === 'analitik' && !appState.analyticsState.selectedVideoId) {
    renderPlatformChannelOverview()
  }
}