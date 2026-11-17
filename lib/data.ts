import { img } from './utils'

// Sample marketplace data for the UI demo. The complete project manages vendors, products & commissions from the admin panel.
export type Vendor = { id: string; name: string; city: string; rating: number; products: number; logo: string; color: string; verified: boolean }
export type Product = { id: string; name: string; price: number; mrp: number; rating: number; image: string; vendor: string; category: string; delivery: string }

export const vendors: Vendor[] = [
  { id: 'techverse', name: 'TechVerse Store', city: 'Bengaluru', rating: 4.8, products: 1240, logo: '⚡', color: 'from-sky-500 to-indigo-600', verified: true },
  { id: 'craftora', name: 'Craftora Handmade', city: 'Jaipur', rating: 4.9, products: 386, logo: '🏺', color: 'from-amber-500 to-rose-500', verified: true },
  { id: 'urbanthreads', name: 'Urban Threads', city: 'Tiruppur', rating: 4.6, products: 2104, logo: '👕', color: 'from-fuchsia-500 to-purple-600', verified: true },
  { id: 'greenleaf', name: 'GreenLeaf Living', city: 'Pune', rating: 4.7, products: 512, logo: '🌿', color: 'from-emerald-500 to-teal-600', verified: false },
]

const v = (id: string) => vendors.find((x) => x.id === id)!.name

export const products: Product[] = [
  { id: 'p1', name: 'Noise-Cancelling Headphones', price: 4799, mrp: 7999, rating: 4.6, image: img('1505740420928-5e560c06d30e', 600), vendor: v('techverse'), category: 'Electronics', delivery: 'Tomorrow' },
  { id: 'p2', name: 'Instant Film Camera', price: 5999, mrp: 7499, rating: 4.7, image: img('1526170375885-4d8ecf77b99f', 600), vendor: v('techverse'), category: 'Electronics', delivery: '2 days' },
  { id: 'p3', name: 'Minimal Analog Watch', price: 2899, mrp: 4999, rating: 4.5, image: img('1523275335684-37898b6baf30', 600), vendor: v('urbanthreads'), category: 'Fashion', delivery: 'Tomorrow' },
  { id: 'p4', name: 'Handglazed Ceramic Mug', price: 1149, mrp: 1599, rating: 4.9, image: img('1514228742587-6b1558fcca3d', 600), vendor: v('craftora'), category: 'Home', delivery: '3 days' },
  { id: 'p5', name: 'Succulent in Ceramic Pot', price: 849, mrp: 1199, rating: 4.8, image: img('1485955900006-10f4d324d411', 600), vendor: v('greenleaf'), category: 'Home', delivery: '2 days' },
  { id: 'p6', name: 'Everyday Laptop Backpack', price: 1999, mrp: 3499, rating: 4.6, image: img('1553062407-98eeb64c6a62', 600), vendor: v('urbanthreads'), category: 'Fashion', delivery: 'Tomorrow' },
  { id: 'p7', name: 'Waterproof BT Speaker', price: 2999, mrp: 4999, rating: 4.5, image: img('1608043152269-423dbba4e7e1', 600), vendor: v('techverse'), category: 'Electronics', delivery: 'Tomorrow' },
  { id: 'p8', name: 'Metal Arc Desk Lamp', price: 1699, mrp: 2499, rating: 4.7, image: img('1507473885765-e6ed057f782c', 600), vendor: v('craftora'), category: 'Home', delivery: '4 days' },
  { id: 'p9', name: 'Polarised Sunglasses', price: 999, mrp: 2199, rating: 4.4, image: img('1572635196237-14b3f281503f', 600), vendor: v('urbanthreads'), category: 'Fashion', delivery: '2 days' },
  { id: 'p10', name: 'Oud Eau de Parfum', price: 1899, mrp: 2799, rating: 4.6, image: img('1541643600914-78b084683601', 600), vendor: v('craftora'), category: 'Beauty', delivery: '3 days' },
]

export const seller = {
  name: 'TechVerse Store',
  kpis: [
    { label: 'Gross sales (Nov)', value: '₹18.4L', delta: '+21%' },
    { label: 'Orders', value: '2,318', delta: '+14%' },
    { label: 'Pending payout', value: '₹3.92L', delta: 'Settles 20 Nov' },
    { label: 'Store rating', value: '4.8 ★', delta: '1,906 reviews' },
  ],
  orders: [
    { id: 'BH-88412', product: 'Noise-Cancelling Headphones', qty: 1, amount: 4799, status: 'Ready to ship', sla: 'Ship by 6 PM' },
    { id: 'BH-88409', product: 'Waterproof BT Speaker', qty: 2, amount: 5998, status: 'New', sla: 'Accept in 2h' },
    { id: 'BH-88401', product: 'Instant Film Camera', qty: 1, amount: 5999, status: 'Shipped', sla: 'Delhivery · AWB 7731' },
    { id: 'BH-88396', product: 'Noise-Cancelling Headphones', qty: 1, amount: 4799, status: 'Delivered', sla: '15 Nov' },
  ],
  settlement: { gross: 1840000, commission: 220800, shipping: 92000, tax: 39744 },
}
