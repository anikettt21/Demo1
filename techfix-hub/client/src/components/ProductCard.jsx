import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, onView }) {
  const { addToCart } = useCart()
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition group-hover:scale-105" />
        <div className="absolute left-2 top-2 rounded bg-slate-900/80 px-2 py-1 text-xs font-semibold text-white">
          {product.condition}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="text-xs text-slate-500">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-blue-700">${product.price.toFixed(2)}</span>
          <div className="flex gap-2">
            <button onClick={() => onView?.(product)} className="rounded-md border px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">Details</button>
            <button onClick={() => addToCart(product)} className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">
              <ShoppingCart className="mr-1 h-3.5 w-3.5" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
