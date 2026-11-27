import { useState, useEffect } from 'react'
import { PER_PLATFORM_ANALYTICS } from './services/analyticsData'
import { appState, switchTab, renderAnalyticsScreen, renderPlatformSwitcherTabs, renderPlatformChannelOverview, renderPlatformVideosList, renderStudioPlatforms, renderQueueList, renderOAuthAccounts, updateHeaderAndCTA, handlePublishSubmit } from './services/oauthService'
import { KPI_ICONS } from './components/BottomNav'

// Initialize app state from the global definition
const initialState = {
  activeTab: 'analitik',
  videoLoaded: false,
  videoType: null,
  videoPlaying: true,
  videoMeta: {
    name: 'nexus_setup_2026.mp4',
    resolution: '1080x1920 • 60fps',
    sizeDuration: '24.8 MB • 00:45'
  },
  scheduleMode: 'now',
  customCaptionsEnabled: false,
  activeCustomCaptionPlatform: null,
  customCaptions: {},
  pendingOAuthPlatformId: null,
  pendingDisconnectPlatformId: null,
  queueFilter: 'all',
  analyticsState: {
    selectedPlatform: 'youtube',
    timeframe: '28H',
    sortBy: 'newest',
    selectedVideoId: null,
    chartGranularity: 'daily',
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

export default function App() {
  const [appStateLocal, setAppStateLocal] = useState<typeof initialState>(initialState)

  useEffect(() => {
    // Initialize the app state - this sets up global functions
    ;(window as any).switchTab = switchTab
    ;(window as any).renderAnalyticsScreen = renderAnalyticsScreen
    ;(window as any).renderPlatformSwitcherTabs = renderPlatformSwitcherTabs
    ;(window as any).renderPlatformChannelOverview = renderPlatformChannelOverview
    ;(window as any).renderPlatformVideosList = renderPlatformVideosList
    ;(window as any).renderStudioPlatforms = renderStudioPlatforms
    ;(window as any).renderQueueList = renderQueueList
    ;(window as any).renderOAuthAccounts = renderOAuthAccounts
    ;(window as any).updateHeaderAndCTA = updateHeaderAndCTA
    ;(window as any).handlePublishSubmit = handlePublishSubmit
    ;(window as any).KPI_ICONS = KPI_ICONS
    ;(window as any).PER_PLATFORM_ANALYTICS = PER_PLATFORM_ANALYTICS
    ;(window as any).formatCompactID = (num: number) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(2).replace('.', ',') + ' Jt'
      }
      if (num >= 10000) {
        return (num / 1000).toFixed(1).replace('.', ',') + ' Rb'
      }
      return num.toLocaleString('id-ID')
    }

    // Run initial DOMContentLoaded logic
    const handleDOMContentLoaded = () => {
      renderStudioPlatforms()
      renderAnalyticsScreen()
      renderQueueList()
      renderOAuthAccounts()
      updateHeaderAndCTA()
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
    } else {
      handleDOMContentLoaded()
    }
  }, [])

  // Tab switching - delegate to the global switchTab which handles DOM updates
  const handleTabClick = (tabName: string) => {
    switchTab(tabName)
  }

  return null // UI is rendered via the inline script in index.html
}