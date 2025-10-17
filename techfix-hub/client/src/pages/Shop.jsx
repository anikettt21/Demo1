import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { api } from '../services/api'

const categories = ['All', 'Laptop', 'PC', 'Accessories', 'Components']
const conditions = ['All', 'New', 'Used']

export default function Shop() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [condition, setCondition] = useState('All')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    api.listProducts().then(setProducts)
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = !query || p.name.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || p.category === category
      const matchesCondition = condition === 'All' || p.condition === condition
      return matchesQuery && matchesCategory && matchesCondition
    })
  }, [products, query, category, condition])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-slate-900">Shop</h1>
        <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border px-3 py-2 text-sm md:w-60"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border px-3 py-2 text-sm">
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className="rounded-md border px-3 py-2 text-sm">
            {conditions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onView={setSelected} />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-4" onClick={(e) => e.stopPropagation()}>
            <div className="grid gap-4 md:grid-cols-2">
              <img src={selected.image_url} alt={selected.name} className="w-full rounded object-cover" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selected.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{selected.category} • {selected.condition}</p>
                <div className="mt-3 text-2xl font-extrabold text-blue-700">${selected.price.toFixed(2)}</div>
                <p className="mt-4 text-sm text-slate-700">{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )}
