import type { ReactNode } from 'react'

export function Tag({
  children,
  tone = 'cyan',
}: {
  children: ReactNode
  tone?: 'cyan' | 'emerald' | 'amber'
}) {
  return <span className={`glow-tag glow-${tone}`}>{children}</span>
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`glass p-5 ${className}`}>{children}</div>
}

export function SlideShell({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <div className="slide-in mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center gap-6 px-6 py-8 md:px-10">
      <header>
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          {kicker}
        </div>
        <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">{title}</h2>
      </header>
      {children}
    </div>
  )
}

export function Stat({
  value,
  label,
  tone = 'cyan',
}: {
  value: string
  label: string
  tone?: 'cyan' | 'emerald'
}) {
  return (
    <div>
      <div
        className={`text-3xl font-extrabold md:text-4xl ${
          tone === 'cyan' ? 'text-cyan-300' : 'text-emerald-300'
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  )
}
