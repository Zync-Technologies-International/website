import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Grid3x3, Maximize, X } from 'lucide-react'
import { SLIDES } from './slides'

export default function App() {
  const [index, setIndex] = useState(0)
  const [overview, setOverview] = useState(false)
  const last = SLIDES.length - 1

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, last)), [last])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen()
    else void document.documentElement.requestFullscreen?.()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          if (!overview) next()
          break
        case 'ArrowLeft':
          e.preventDefault()
          if (!overview) prev()
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'o':
        case 'O':
          setOverview((v) => !v)
          break
        case 'Escape':
          setOverview(false)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, toggleFullscreen, overview])

  const { Component } = SLIDES[index]
  const progress = ((index + 1) / SLIDES.length) * 100

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-base">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />

      {/* progress bar */}
      <div className="relative z-20 h-1 w-full bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* slide */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <Component key={SLIDES[index].id} />
      </main>

      {/* nav bar */}
      <nav className="relative z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-slate-900/70 px-4 py-2.5 backdrop-blur-md">
        <div className="hidden text-xs font-semibold text-slate-400 sm:block">
          {SLIDES[index].title}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-cyan-300' : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={index === last}
            aria-label="Next slide"
            className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <span className="mr-2 text-xs font-semibold tabular-nums text-slate-400">
            {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
          <button
            onClick={() => setOverview(true)}
            aria-label="Slide overview"
            className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10"
          >
            <Grid3x3 size={18} />
          </button>
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10"
          >
            <Maximize size={18} />
          </button>
        </div>
      </nav>

      {/* overview modal */}
      {overview && (
        <div
          className="fade-in absolute inset-0 z-50 overflow-y-auto bg-base/95 p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Slide overview"
          onClick={() => setOverview(false)}
        >
          <div className="mx-auto max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Slide overview</h2>
              <button
                onClick={() => setOverview(false)}
                aria-label="Close overview"
                className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setIndex(i)
                    setOverview(false)
                  }}
                  className={`glass p-5 text-left transition hover:border-cyan-400/50 ${
                    i === index ? 'border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.25)]' : ''
                  }`}
                >
                  <div className="mb-2 text-xs font-bold tracking-widest text-cyan-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-bold text-white">{s.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
