export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-soft max-w-lg w-full mx-4 p-6">
        <button className="absolute top-3 right-3 text-slate-500" onClick={onClose}>✕</button>
        <div className="aspect-[4/3] bg-slate-100 rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
        <div className="text-sm text-slate-500">{product.category} · {product.condition}</div>
        <div className="mt-3 text-brand font-bold text-lg">${Number(product.price).toFixed(2)}</div>
        {product.description && (
          <p className="mt-3 text-slate-700 text-sm">{product.description}</p>
        )}
        <div className="mt-6 flex gap-3">
          <button onClick={()=>onAddToCart(product)} className="px-4 py-2 rounded-md bg-brand text-white">Add to Cart</button>
          <a href="/contact" className="px-4 py-2 rounded-md border border-slate-300">Buy Now</a>
        </div>
      </div>
    </div>
  )
}
