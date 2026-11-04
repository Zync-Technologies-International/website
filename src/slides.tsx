import { useState, type ReactNode } from 'react'
import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  BadgeIndianRupee,
  Boxes,
  Check,
  Cloud,
  Cpu,
  Factory,
  Handshake,
  Layers,
  Lock,
  MapPin,
  Network,
  Package,
  Plane,
  Radio,
  Rocket,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react'
import { Card, SlideShell, Stat, Tag } from './ui'

/* ───────────────────────── Slide 1 ───────────────────────── */
function Title() {
  return (
    <div className="slide-in relative mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center gap-6 px-6 py-10 md:px-10">
      <div>
        <Tag tone="cyan">
          <Rocket size={14} /> Pre-Seed Pitch Deck | Kerala Startup Mission
        </Tag>
      </div>
      <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
        The Next-Gen Infrastructure for <span className="grad-text">Smart Gateways</span>
      </h1>
      <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
        Hardware-as-a-Service (HaaS) RFID Tracking &amp; Access Systems for Airports and
        Healthcare.
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <Tag tone="emerald">
          <Plane size={14} /> Aviation · IATA R753
        </Tag>
        <Tag tone="emerald">
          <Stethoscope size={14} /> Medical Facilities
        </Tag>
        <Tag tone="cyan">
          <MapPin size={14} /> Engineered in Kerala
        </Tag>
      </div>
      <p className="text-sm text-slate-500">
        Press <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-200">→</kbd> or{' '}
        <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-200">Space</kbd> to begin ·{' '}
        <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-200">O</kbd> overview ·{' '}
        <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-200">F</kbd> fullscreen
      </p>
    </div>
  )
}

/* ───────────────────────── Slide 2 ───────────────────────── */
function Problem() {
  return (
    <SlideShell
      kicker="The Problem & Market Gap"
      title={
        <>
          Tracking is still broken in the two places where <span className="grad-text">it matters most</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center gap-2 font-bold text-cyan-300">
            <Plane size={18} /> Aviation bottleneck
          </div>
          <div className="mb-4 flex gap-8">
            <Stat value="$6.3B" label="spent annually on mishandled bags" />
            <Stat value="73%" label="of airports still rely on barcode scanning" tone="emerald" />
          </div>
          <p className="text-sm text-slate-300">
            IATA Resolution 753 mandates end-to-end bag tracking at four touchpoints, yet
            most airports run legacy, manual barcode workflows.
          </p>
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-2 font-bold text-emerald-300">
            <Stethoscope size={18} /> Medical bottleneck
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-300" />
              No real-time view of where patients are, especially the vulnerable.
            </li>
            <li className="flex gap-2">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-300" />
              Unauthorised access to restricted wings.
            </li>
            <li className="flex gap-2">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-300" />
              Expensive mobile assets (wheelchairs, portable scanners) get misplaced.
            </li>
          </ul>
        </Card>
      </div>
      <Card className="border-cyan-400/30">
        <div className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-300">
          The gap in the middle
        </div>
        <div className="grid gap-4 text-sm md:grid-cols-3">
          <div>
            <div className="mb-1 font-semibold text-white">Legacy vendors</div>
            <p className="text-slate-400">Rigid, heavily priced capex projects.</p>
          </div>
          <div>
            <div className="mb-1 font-semibold text-white">Direct manufacturers</div>
            <p className="text-slate-400">Uncertified, insecure, “dumb” hardware.</p>
          </div>
          <div>
            <div className="mb-1 font-semibold text-emerald-300">Mid-tier airports &amp; hospitals</div>
            <p className="text-slate-300">Need an integrated, software-backed solution that is affordable.</p>
          </div>
        </div>
      </Card>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 3 ───────────────────────── */
function Solution() {
  return (
    <SlideShell
      kicker="The Solution"
      title={
        <>
          We are the <span className="grad-text">integration bridge</span>
        </>
      }
    >
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        <Card>
          <div className="mb-2 flex items-center gap-2 font-bold text-slate-200">
            <Factory size={18} className="text-amber-300" /> Sourced
          </div>
          <p className="text-sm text-slate-300">
            Reliable hardware enclosures and gate mechanicals from Coimbatore (India) and
            China.
          </p>
        </Card>
        <div className="hidden items-center text-cyan-300 md:flex">
          <ArrowRight />
        </div>
        <Card className="border-cyan-400/40">
          <div className="mb-3 flex items-center gap-2 font-bold text-cyan-300">
            <Cpu size={18} /> Built in Kerala
          </div>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="flex gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />
              Custom edge controller PCB &amp; firmware: anti-tailgating, local offline caching.
            </li>
            <li className="flex gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />
              Cloud fleet dashboard with Hospital Management System (HMS) and IATA messaging
              integrations.
            </li>
          </ul>
        </Card>
        <div className="hidden items-center text-cyan-300 md:flex">
          <ArrowRight />
        </div>
        <Card>
          <div className="mb-2 flex items-center gap-2 font-bold text-slate-200">
            <Handshake size={18} className="text-emerald-300" /> Delivered
          </div>
          <p className="text-sm text-slate-300">
            A customised, certified product connected to the client’s existing systems.
          </p>
        </Card>
      </div>
      <Card className="border-emerald-400/30 bg-emerald-400/5">
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">
          Core value proposition
        </div>
        <p className="mt-2 text-xl font-semibold text-white">
          Enterprise-grade automated gates and RFID tracking at a fraction of the cost, ready
          in weeks.
        </p>
      </Card>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 4 ───────────────────────── */
function Products() {
  return (
    <SlideShell
      kicker="Dual Product Lines"
      title={
        <>
          Two lines, one <span className="grad-text">software platform</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-cyan-400/30">
          <Tag tone="cyan">Line A</Tag>
          <h3 className="mb-4 mt-3 text-xl font-bold text-white">Smart Access Gates</h3>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
            <div className="mb-1 flex items-center gap-2 font-bold text-cyan-300">
              <ScanLine size={18} /> GATE-S · Speed Gate Lane
            </div>
            <p className="text-sm text-slate-300">
              Bi-directional UHF/NFC reader for staff and authorised patient movement, across
              airports and medical facilities.
            </p>
          </div>
        </Card>
        <Card className="border-emerald-400/30">
          <Tag tone="emerald">Line B</Tag>
          <h3 className="mb-4 mt-3 text-xl font-bold text-white">Tracking Kits</h3>
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <div className="mb-1 flex items-center gap-2 font-bold text-emerald-300">
                <Plane size={18} /> BAG-KIT
              </div>
              <p className="text-sm text-slate-300">
                5 critical read points for airport baggage handling.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <div className="mb-1 flex items-center gap-2 font-bold text-emerald-300">
                <Stethoscope size={18} /> MED-KIT
              </div>
              <p className="text-sm text-slate-300">
                RFID zones for hospitals to track expensive mobile assets (wheelchairs,
                portable scanners) and vulnerable patients.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 5 (interactive) ───────────────────────── */
const COST = 3272
type Model = 'capex' | 'haas'

function cashSeries(model: Model): number[] {
  const out: number[] = []
  for (let m = 0; m <= 36; m++) {
    if (model === 'haas') {
      out.push(-COST + 750 + 230 * m)
    } else {
      out.push(6500 - COST + (m > 12 ? Math.floor((m - 1) / 12) * 900 : 0))
    }
  }
  return out
}

function CashChart({ model }: { model: Model }) {
  const data = cashSeries(model)
  const W = 520
  const H = 190
  const pad = { l: 44, r: 12, t: 12, b: 24 }
  const min = Math.min(...data, 0)
  const max = Math.max(...data)
  const x = (i: number) => pad.l + (i / 36) * (W - pad.l - pad.r)
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min)) * (H - pad.t - pad.b)
  const path = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const zero = y(0)
  const payback = model === 'haas' ? 11 : 0
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Cumulative cash per lane over 36 months">
      <line x1={pad.l} x2={W - pad.r} y1={zero} y2={zero} stroke="#475569" strokeDasharray="4 4" />
      <path d={path} fill="none" stroke={model === 'haas' ? '#34d399' : '#22d3ee'} strokeWidth={3} />
      {[0, 12, 24, 36].map((m) => (
        <text key={m} x={x(m)} y={H - 6} fontSize={11} fill="#94a3b8" textAnchor="middle">
          M{m}
        </text>
      ))}
      {[min, 0, max].map((v, i) => (
        <text key={i} x={pad.l - 6} y={y(v) + 4} fontSize={11} fill="#94a3b8" textAnchor="end">
          {v < 0 ? '-' : ''}${Math.abs(Math.round(v / 100) / 10)}k
        </text>
      ))}
      {model === 'haas' && (
        <>
          <circle cx={x(payback)} cy={y(data[payback])} r={5} fill="#34d399" />
          <text x={x(payback) + 10} y={y(data[payback]) + 16} fontSize={12} fill="#34d399" fontWeight={700}>
            Payback ≈ month 11
          </text>
        </>
      )}
    </svg>
  )
}

function Economics() {
  const [model, setModel] = useState<Model>('haas')
  const rows: [string, string][] =
    model === 'capex'
      ? [
          ['Landed / assembled cost per lane', '~$3,270'],
          ['Selling price', '$6,500'],
          ['Gross margin', '≈ 50%'],
          ['Recurring AMC', '$900 / year'],
        ]
      : [
          ['Setup fee', '$750'],
          ['Monthly fee × 36', '$230 × 36 = $8,280'],
          ['Total contract value', '$9,030'],
          ['Cash payback on hardware', '≈ 11 months'],
        ]
  return (
    <SlideShell
      kicker="Business Model & Unit Economics"
      title={
        <>
          Same lane, <span className="grad-text">two ways to buy</span>
        </>
      }
    >
      <div className="inline-flex w-fit rounded-xl border border-white/10 bg-slate-900/70 p-1" role="tablist">
        {(
          [
            ['capex', 'Capex (Outright)', Wallet],
            ['haas', 'HaaS (36-mo Subscription)', Layers],
          ] as const
        ).map(([id, label, Icon]) => (
          <button
            key={id}
            role="tab"
            aria-selected={model === id}
            onClick={() => setModel(id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              model === id
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>
      <div key={model} className="fade-in grid gap-4 md:grid-cols-2">
        <Card>
          <dl className="divide-y divide-white/10">
            {rows.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-slate-400">{k}</dt>
                <dd className="text-right text-lg font-bold text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card>
          <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
            Cumulative cash per lane over 36 months
          </div>
          <CashChart model={model} />
          <p className="mt-1 text-xs text-slate-500">
            Illustrative. Hardware cost $3,272 per lane; support costs excluded from the payback
            line.
          </p>
        </Card>
      </div>
      <Card className="border-emerald-400/30 bg-emerald-400/5">
        <span className="font-bold text-emerald-300">Why it wins: </span>
        <span className="text-slate-200">
          HaaS removes the upfront capex barrier for budget-constrained hospitals and regional
          airports, while we keep recurring revenue and the customer relationship.
        </span>
      </Card>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 6 ───────────────────────── */
function Supply() {
  const steps: { icon: ReactNode; title: string; body: string; tone: string }[] = [
    {
      icon: <Factory size={20} />,
      title: 'Coimbatore',
      body: 'Mechanicals for speed and local support',
      tone: 'text-amber-300',
    },
    {
      icon: <Package size={20} />,
      title: 'China OEMs',
      body: 'Gate bodies and readers for cost and scale',
      tone: 'text-amber-300',
    },
    {
      icon: <Wrench size={20} />,
      title: 'Kerala',
      body: 'Assemble, flash firmware, QA and burn-in',
      tone: 'text-cyan-300',
    },
    {
      icon: <Truck size={20} />,
      title: 'Client',
      body: 'Deploy, integrate and support',
      tone: 'text-emerald-300',
    },
  ]
  return (
    <SlideShell
      kicker="Supply Chain & Defensibility"
      title={
        <>
          Hybrid supply, <span className="grad-text">owned intelligence</span>
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-4">
        {steps.map((s, i) => (
          <Card key={s.title} className="relative">
            <div className={`mb-2 flex items-center gap-2 font-bold ${s.tone}`}>
              {s.icon} {s.title}
            </div>
            <p className="text-sm text-slate-300">{s.body}</p>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="absolute -right-3 top-1/2 z-10 hidden text-cyan-300 md:block" />
            )}
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-cyan-400/30">
          <div className="mb-1 flex items-center gap-2 font-bold text-cyan-300">
            <Lock size={18} /> 1 · Software lock-in
          </div>
          <p className="text-sm text-slate-300">
            We own the dashboard, the integrations and the API bridge to the client’s existing
            software. Hardware is replaceable; the platform is not.
          </p>
        </Card>
        <Card className="border-emerald-400/30">
          <div className="mb-1 flex items-center gap-2 font-bold text-emerald-300">
            <ShieldCheck size={18} /> 2 · Hybrid supply
          </div>
          <p className="text-sm text-slate-300">
            A de-risked chain that pairs local Coimbatore manufacturers with global OEMs, so no
            single factory can stall a deployment.
          </p>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
            Kerala / India value-add
          </div>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>· Proprietary edge controller &amp; firmware</li>
            <li>· Cloud middleware, dashboard &amp; APIs</li>
            <li>· Integration, QA, certification files</li>
          </ul>
        </Card>
        <Card>
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300">
            Sourced OEM
          </div>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>· Mechanical gate shells and enclosures</li>
            <li>· RFID reader modules, tags and credentials</li>
            <li>· Dual-sourced per SKU</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 7 ───────────────────────── */
function Team() {
  const roles = [
    { icon: <Cpu size={20} />, title: 'Hardware Engineering', body: 'Controller PCB, firmware, certification' },
    { icon: <Cloud size={20} />, title: 'Cloud / Software', body: 'Fleet dashboard, HMS and IATA integrations' },
    { icon: <Boxes size={20} />, title: 'Supply Chain', body: 'OEM sourcing, imports, quality control' },
    { icon: <Users size={20} />, title: 'B2B Sales', body: 'Hospitals, campuses and airport pilots' },
  ]
  const advantages = [
    { icon: <Radio size={18} />, title: 'KSUM Maker Village', body: 'Electronics rapid prototyping' },
    { icon: <Anchor size={18} />, title: 'Cochin Port', body: 'Direct access for imports and exports' },
    { icon: <Network size={18} />, title: 'Engineering talent', body: 'Strong local embedded and cloud talent pool' },
  ]
  return (
    <SlideShell
      kicker="Lean Team & Kerala Advantage"
      title={
        <>
          A lean team with an <span className="grad-text">ecosystem edge</span>
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-4">
        {roles.map((r) => (
          <Card key={r.title}>
            <div className="mb-2 text-cyan-300">{r.icon}</div>
            <div className="font-bold text-white">{r.title}</div>
            <p className="mt-1 text-sm text-slate-400">{r.body}</p>
          </Card>
        ))}
      </div>
      <Card className="border-emerald-400/30">
        <div className="mb-4 flex items-center gap-2 font-bold text-emerald-300">
          <MapPin size={18} /> Kerala ecosystem leverage
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {advantages.map((a) => (
            <div key={a.title} className="flex gap-3">
              <div className="mt-0.5 text-emerald-300">{a.icon}</div>
              <div>
                <div className="font-semibold text-white">{a.title}</div>
                <p className="text-sm text-slate-400">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 8 (interactive) ───────────────────────── */
const QUARTERS = [
  {
    id: 'Q1',
    range: 'M01–M03',
    title: 'Build the foundation',
    items: ['Incorporate the company', 'Source OEM samples from Coimbatore and China', 'Build Controller v1 prototype'],
    milestone: 'Working demo lane',
  },
  {
    id: 'Q2',
    range: 'M04–M06',
    title: 'Validate with beta pilots',
    items: ['Deploy 2 unpaid beta pilots: 1 local hospital, 1 campus', 'Gather data and validate the software'],
    milestone: '2 live pilots',
  },
  {
    id: 'Q3',
    range: 'M07–M09',
    title: 'Certify and convert',
    items: ['Secure certifications (WPC, CE)', 'Convert beta pilots to paid contracts'],
    milestone: 'First paid contracts',
  },
  {
    id: 'Q4',
    range: 'M10–M12',
    title: 'Land the airport',
    items: ['Sign first mid-size airport pilot', 'Launch aggressive B2B outreach for HaaS leasing'],
    milestone: '1 airport pilot signed',
  },
]

function Roadmap() {
  const [q, setQ] = useState(0)
  const active = QUARTERS[q]
  return (
    <SlideShell
      kicker="12-Month Execution Roadmap"
      title={
        <>
          From prototype to <span className="grad-text">first airport pilot</span>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-1.5" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-colors ${
              Math.floor(i / 3) <= q ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-slate-700'
            }`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {QUARTERS.map((item, i) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={q === i}
            onClick={() => setQ(i)}
            className={`rounded-xl border px-4 py-2 text-left text-sm font-semibold transition ${
              q === i
                ? 'border-cyan-400/60 bg-cyan-400/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                : 'border-white/10 bg-slate-800/40 text-slate-300 hover:border-white/30'
            }`}
          >
            <div>{item.id}</div>
            <div className="text-xs font-normal text-slate-400">{item.range}</div>
          </button>
        ))}
      </div>
      <Card key={active.id} className="fade-in">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-bold text-white">
            {active.id} · {active.title}
          </h3>
          <Tag tone="emerald">
            <Check size={14} /> Milestone: {active.milestone}
          </Tag>
        </div>
        <ul className="space-y-2">
          {active.items.map((it) => (
            <li key={it} className="flex gap-2 text-slate-200">
              <Check size={18} className="mt-0.5 shrink-0 text-emerald-300" />
              {it}
            </li>
          ))}
        </ul>
      </Card>
    </SlideShell>
  )
}

/* ───────────────────────── Slide 9 ───────────────────────── */
const FUNDS = [
  { label: 'Engineering, R&D and Cloud Dashboard MVP', lakh: 35, color: 'bg-cyan-400' },
  { label: 'Demo inventory & HaaS hardware float', lakh: 15, color: 'bg-emerald-400' },
  { label: 'Certifications (WPC, CE) and pilot deployment', lakh: 15, color: 'bg-sky-400' },
  { label: 'Working capital, legal and buffer', lakh: 10, color: 'bg-slate-400' },
]

function Ask() {
  return (
    <SlideShell
      kicker="The Pre-Seed Ask & Funding Strategy"
      title={
        <>
          <span className="grad-text">₹75 Lakhs</span> (~$90,000) to break even on the first 10 deployments
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center gap-2 font-bold text-cyan-300">
            <BadgeIndianRupee size={18} /> Use of funds
          </div>
          <div className="mb-4 flex h-3 overflow-hidden rounded-full">
            {FUNDS.map((f) => (
              <div key={f.label} className={f.color} style={{ width: `${(f.lakh / 75) * 100}%` }} />
            ))}
          </div>
          <ul className="space-y-3">
            {FUNDS.map((f) => (
              <li key={f.label} className="flex items-start gap-3 text-sm">
                <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${f.color}`} />
                <span className="flex-1 text-slate-300">{f.label}</span>
                <span className="font-bold text-white">₹{f.lakh}L</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-2 font-bold text-emerald-300">
            <Handshake size={18} /> Ways we will raise it
          </div>
          <ol className="space-y-4 text-sm">
            <li>
              <div className="font-semibold text-white">1 · KSUM Seed Fund / NIDHI-PRAYAS</div>
              <p className="text-slate-400">Non-dilutive prototyping grants for the initial hardware build.</p>
            </li>
            <li>
              <div className="font-semibold text-white">2 · Startup India Seed Fund Scheme (SISFS)</div>
              <p className="text-slate-400">Debt / convertible note through a local incubator.</p>
            </li>
            <li>
              <div className="font-semibold text-white">3 · Angel syndicates</div>
              <p className="text-slate-400">
                Kerala Angel Network (KAN) or Malabar Angels for the remaining equity portion, backing
                the SaaS/HaaS software play.
              </p>
            </li>
          </ol>
        </Card>
      </div>
    </SlideShell>
  )
}

export type SlideDef = { id: string; title: string; Component: () => ReactNode }

export const SLIDES: SlideDef[] = [
  { id: 'title', title: 'Title & Hook', Component: Title },
  { id: 'problem', title: 'Problem & Market Gap', Component: Problem },
  { id: 'solution', title: 'The Integration Bridge', Component: Solution },
  { id: 'products', title: 'Dual Product Lines', Component: Products },
  { id: 'economics', title: 'Business Model & Unit Economics', Component: Economics },
  { id: 'supply', title: 'Supply Chain & Moat', Component: Supply },
  { id: 'team', title: 'Team & Kerala Advantage', Component: Team },
  { id: 'roadmap', title: '12-Month Roadmap', Component: Roadmap },
  { id: 'ask', title: 'Pre-Seed Ask & Funding', Component: Ask },
]
