'use client'

import Link from 'next/link'
import { MapPin, Search, ShoppingCart, Store, User } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useContact } from './ContactModal'

export default function Header() {
  const { count, setOpen } = useCart()
  const { openContact } = useContact()
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="container-x flex h-16 items-center gap-4">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">Bazaar<span className="text-brand-400">Hub</span></Link>
        <button className="hidden items-center gap-1 text-xs text-slate-300 lg:flex"><MapPin className="h-4 w-4" /><span>Deliver to<br /><b className="text-white">Mumbai 400001</b></span></button>
        <div className="flex flex-1 overflow-hidden rounded-xl bg-white">
          <select className="hidden border-r border-slate-200 bg-slate-100 px-3 text-sm text-slate-700 outline-none sm:block"><option>All</option><option>Electronics</option><option>Fashion</option><option>Home</option></select>
          <input placeholder="Search across 50,000+ sellers…" className="min-w-0 flex-1 px-4 py-2.5 text-sm text-slate-900 outline-none" />
          <button className="bg-brand-500 px-4 text-white hover:bg-brand-600" aria-label="Search"><Search className="h-5 w-5" /></button>
        </div>
        <Link href="/seller" className="hidden items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/10 md:flex"><Store className="h-4 w-4" /> Seller hub</Link>
        <button onClick={() => openContact('Customer Login & Accounts')} className="rounded-xl p-2 hover:bg-white/10" aria-label="Account"><User className="h-5 w-5" /></button>
        <button onClick={() => setOpen(true)} className="relative rounded-xl p-2 hover:bg-white/10" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
          {count > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[10px] font-bold">{count}</span>}
        </button>
      </div>
    </header>
  )
}
