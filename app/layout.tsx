import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ContactProvider, DemoBar } from '@/components/ContactModal'
import { CartProvider } from '@/lib/cart'
import CartDrawer from '@/components/CartDrawer'
import Header from '@/components/Header'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Outfit({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'BazaarHub – Multi-Vendor Marketplace Demo | Naya Prayog Technologies',
  description: 'Premium multi-vendor e-commerce marketplace UI demo with vendor stores, marketplace catalogue, cart and seller dashboard. Contact Naya Prayog Technologies for the complete project.',
}

const APP = 'BazaarHub'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-slate-50 font-sans">
        <ContactProvider appName={APP}>
          <CartProvider>
            <DemoBar appName={APP} />
            <Header />
            <main>{children}</main>
            <footer className="mt-24 border-t border-slate-200 bg-white py-10">
              <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
                <p className="font-display text-xl font-bold text-slate-900">Bazaar<span className="text-brand-600">Hub</span></p>
                <p>© {new Date().getFullYear()} BazaarHub · UI demo by Naya Prayog Technologies · nayaprayog.com</p>
              </div>
            </footer>
            <CartDrawer />
          </CartProvider>
        </ContactProvider>
      </body>
    </html>
  )
}
