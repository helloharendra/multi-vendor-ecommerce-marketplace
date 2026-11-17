import Link from 'next/link'
import { ArrowRight, BadgeCheck, Star } from 'lucide-react'
import Catalogue from '@/components/Catalogue'
import { vendors } from '@/lib/data'

const cats = [['📱', 'Mobiles'], ['💻', 'Laptops'], ['👗', 'Fashion'], ['🛋️', 'Home'], ['💄', 'Beauty'], ['🧸', 'Toys'], ['🍯', 'Grocery'], ['🏺', 'Handmade']]

export default function Home() {
  return (
    <>
      <section className="container-x pt-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-orange-500 to-rose-500 p-8 text-white shadow-xl lg:col-span-2 sm:p-12">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute bottom-0 right-8 hidden text-[160px] leading-none drop-shadow-2xl md:block">🛍️</div>
            <p className="relative text-sm font-semibold uppercase tracking-widest text-white/80">Big Bazaar Days · 18–24 Nov</p>
            <h1 className="relative mt-3 max-w-lg font-display text-4xl font-extrabold leading-tight sm:text-6xl">50,000+ sellers.<br />One cart.</h1>
            <p className="relative mt-4 max-w-md text-white/85">Shop from verified local brands and artisans across India with buyer protection on every order.</p>
            <Link href="#shop" className="btn relative mt-8 bg-white px-7 py-3.5 text-slate-900 hover:bg-orange-50">Start shopping <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white">
            <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-brand-500/40 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-widest text-brand-300">For sellers</p>
            <h2 className="relative mt-3 font-display text-3xl font-bold">Sell on BazaarHub</h2>
            <p className="relative mt-3 text-sm text-slate-300">0% commission for the first 30 days. Payouts every 7 days. Reach 2 crore+ shoppers.</p>
            <Link href="/seller" className="btn relative mt-8 bg-brand-500 text-white hover:bg-brand-600">Open seller hub <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="no-scrollbar mt-6 flex gap-3 overflow-x-auto">
          {cats.map(([e, n]) => (
            <Link key={n} href="#shop" className="flex min-w-[110px] flex-1 flex-col items-center gap-2 rounded-2xl bg-white py-4 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-3xl">{e}</span><span className="text-xs font-semibold text-slate-700">{n}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x mt-14">
        <h2 className="font-display text-2xl font-bold text-slate-900">Featured stores</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((v) => (
            <div key={v.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`h-20 bg-gradient-to-r ${v.color}`} />
              <div className="-mt-8 px-5 pb-5">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl shadow-lg ring-4 ring-white">{v.logo}</div>
                <p className="mt-3 flex items-center gap-1 font-semibold text-slate-900">{v.name}{v.verified && <BadgeCheck className="h-4 w-4 text-sky-500" />}</p>
                <p className="text-xs text-slate-500">{v.city} · {v.products.toLocaleString('en-IN')} products</p>
                <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-700"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{v.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="container-x mt-14 scroll-mt-24">
        <h2 className="mb-5 font-display text-2xl font-bold text-slate-900">Deals from all sellers</h2>
        <Catalogue />
      </section>
    </>
  )
}
