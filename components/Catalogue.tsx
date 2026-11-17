'use client'

import { useState } from 'react'
import { BadgeCheck, Star, Store, Truck } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { inr } from '@/lib/utils'
import { products, vendors } from '@/lib/data'

export default function Catalogue() {
  const { add } = useCart()
  const [vendor, setVendor] = useState('All sellers')
  const list = products.filter((p) => vendor === 'All sellers' || p.vendor === vendor)

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 lg:sticky lg:top-24">
        <p className="text-sm font-semibold text-slate-900">Filter by seller</p>
        <div className="mt-3 space-y-1">
          {['All sellers', ...vendors.map((v) => v.name)].map((v) => (
            <button key={v} onClick={() => setVendor(v)} className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${vendor === v ? 'bg-brand-50 font-semibold text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Store className="h-4 w-4" />{v}
            </button>
          ))}
        </div>
      </aside>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => {
          const off = Math.round(((p.mrp - p.price) / p.mrp) * 100)
          return (
            <div key={p.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl animate-fade-up">
              <div className="relative overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-2 top-2 rounded-md bg-rose-600 px-2 py-0.5 text-xs font-bold text-white">{off}% off</span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900">{p.name}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">by <span className="font-medium text-brand-700">{p.vendor}</span> <BadgeCheck className="h-3.5 w-3.5 text-sky-500" /></p>
                <div className="mt-2 flex items-center gap-1 text-xs"><span className="inline-flex items-center gap-0.5 rounded bg-emerald-600 px-1.5 py-0.5 font-bold text-white">{p.rating}<Star className="h-3 w-3 fill-white" /></span></div>
                <div className="mt-2 flex items-baseline gap-2"><span className="text-lg font-bold text-slate-900">{inr(p.price)}</span><span className="text-xs text-slate-400 line-through">{inr(p.mrp)}</span></div>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Truck className="h-3.5 w-3.5" /> Delivery {p.delivery}</p>
                <div className="mt-auto pt-4" /><button onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image, variant: `Sold by ${p.vendor}` })} className="rounded-xl bg-brand-500 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
