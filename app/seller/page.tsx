import type { Metadata } from 'next'
import SellerActions from '@/components/SellerActions'
import { seller } from '@/lib/data'
import { inr } from '@/lib/utils'

export const metadata: Metadata = { title: 'Seller hub · BazaarHub demo' }

const tone: Record<string, string> = {
  New: 'bg-sky-50 text-sky-700', 'Ready to ship': 'bg-amber-50 text-amber-700', Shipped: 'bg-violet-50 text-violet-700', Delivered: 'bg-emerald-50 text-emerald-700',
}

export default function Seller() {
  const s = seller.settlement
  const net = s.gross - s.commission - s.shipping - s.tax
  return (
    <div className="container-x py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Seller hub</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-900">⚡ {seller.name}</h1>
          <p className="text-sm text-slate-500">Verified seller · Bengaluru · Member since 2023</p>
        </div>
        <SellerActions />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {seller.kpis.map((k) => (
          <div key={k.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
            <p className="text-sm text-slate-500">{k.label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-slate-900">{k.value}</p>
            <p className="mt-1 text-xs font-semibold text-emerald-600">{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 lg:col-span-2">
          <p className="border-b border-slate-100 px-6 py-4 font-semibold text-slate-900">Orders to fulfil</p>
          <ul className="divide-y divide-slate-100">
            {seller.orders.map((o) => (
              <li key={o.id} className="flex flex-wrap items-center gap-4 px-6 py-4">
                <div className="min-w-[200px] flex-1"><p className="font-semibold text-slate-900">{o.product} × {o.qty}</p><p className="text-xs text-slate-500">{o.id} · {o.sla}</p></div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tone[o.status]}`}>{o.status}</span>
                <span className="w-24 text-right font-bold text-slate-900">{inr(o.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white">
          <p className="font-semibold">Settlement · 11–20 Nov</p>
          <dl className="mt-5 space-y-3 text-sm">
            {[['Gross sales', s.gross], ['Marketplace commission (12%)', -s.commission], ['Shipping fees', -s.shipping], ['TCS / GST', -s.tax]].map(([k, v]) => (
              <div key={k as string} className="flex justify-between"><dt className="text-slate-400">{k as string}</dt><dd className={(v as number) < 0 ? 'text-rose-300' : ''}>{(v as number) < 0 ? '−' : ''}{inr(Math.abs(v as number))}</dd></div>
            ))}
            <div className="flex justify-between border-t border-white/15 pt-3 text-base font-bold"><dt>Net payout</dt><dd className="text-brand-300">{inr(net)}</dd></div>
          </dl>
          <p className="mt-4 text-xs text-slate-400">Auto-transferred to HDFC ••4410 on 20 Nov</p>
        </div>
      </div>
    </div>
  )
}
