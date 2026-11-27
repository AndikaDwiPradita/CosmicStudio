import React from 'react'

const BottomNav: React.FC = () => {
  return (
    <nav className="sticky bottom-0 z-30 bg-black/90 backdrop-blur-xl border-t border-hairline px-2 py-2">
      <div className="grid grid-cols-4 gap-1">
        {/* Tab 1: Studio */}
        <button type="button" onclick="switchTab('studio')" id="nav-studio" class="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition relative">
          <div id="nav-indicator-studio" class="opacity-0 absolute -top-2 w-7 h-[2px] bg-[#E4E4E7] neon-halo-soft rounded-full transition-opacity"></div>
          <svg id="nav-icon-studio" class="w-5 h-5 text-zinc-500 mb-1" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
          <span id="nav-text-studio" class="text-[10px] font-medium text-zinc-500">Studio</span>
        </button>

        {/* Tab 2: Analitik (Active by default) */}
        <button type="button" onclick="switchTab('analitik')" id="nav-analitik" class="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition relative">
          <div id="nav-indicator-analitik" class="absolute -top-2 w-7 h-[2px] bg-[#E4E4E7] neon-halo-soft rounded-full transition-opacity"></div>
          <svg id="nav-icon-analitik" class="w-5 h-5 text-zinc-100 neon-icon-subtle mb-1" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
          </svg>
          <span id="nav-text-analitik" class="text-[10px] font-bold text-zinc-100 neon-text-subtle">Analitik</span>
        </button>

        {/* Tab 3: Antrean */}
        <button type="button" onclick="switchTab('antrean')" id="nav-antrean" class="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition relative">
          <div id="nav-indicator-antrean" class="opacity-0 absolute -top-2 w-7 h-[2px] bg-[#E4E4E7] neon-halo-soft rounded-full transition-opacity"></div>
          <div class="relative">
            <svg id="nav-icon-antrean" class="w-5 h-5 text-zinc-500 mb-1" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
            </svg>
            <span id="nav-queue-dot" class="hidden absolute -top-0.5 -right-1.5 w-1.5 h-1.5 rounded-full neon-dot-subtle animate-subtle-pulse"></span>
          </div>
          <span id="nav-text-antrean" class="text-[10px] font-medium text-zinc-500">Antrean</span>
        </button>

        {/* Tab 4: Akun */}
        <button type="button" onclick="switchTab('akun')" id="nav-akun" class="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition relative">
          <div id="nav-indicator-akun" class="opacity-0 absolute -top-2 w-7 h-[2px] bg-[#E4E4E7] neon-halo-soft rounded-full transition-opacity"></div>
          <svg id="nav-icon-akun" class="w-5 h-5 text-zinc-500 mb-1" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
          </svg>
          <span id="nav-text-akun" class="text-[10px] font-medium text-zinc-500">Akun</span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav