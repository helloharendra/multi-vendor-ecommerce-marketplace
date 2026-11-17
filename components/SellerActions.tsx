'use client'

import { PackagePlus, Upload } from 'lucide-react'
import { useContact } from './ContactModal'

export default function SellerActions() {
  const { openContact } = useContact()
  return (
    <div className="flex gap-2">
      <button onClick={() => openContact('Bulk Catalogue Upload')} className="btn-ghost"><Upload className="h-4 w-4" /> Bulk upload</button>
      <button onClick={() => openContact('Vendor Product Listing & Approval')} className="btn-primary"><PackagePlus className="h-4 w-4" /> List a product</button>
    </div>
  )
}
