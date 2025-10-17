import { useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../services/api'
import ProductModal from '../components/ProductModal'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [cond, setCond] = useState('All')
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') } catch { return [] }
  })

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchQuery = query ? p.name.toLowerCase().includes(query.toLowerCase()) : true
      const matchCat = category === 'All' ? true : p.category === category
      const matchCond = cond === 'All' ? true : p.condition === cond
      return matchQuery && matchCat && matchCond
    })
  }, [products, query, category, cond])

  const [active, setActive] = useState(null)
  const addToCart = (p) => setCart(prev => [...prev, { ...p, qty: 1 }])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products" className="border rounded-md px-3 py-2 w-full md:w-80" />
        <div className="flex gap-3">
          <select value={category} onChange={e=>setCategory(e.target.value)} className="border rounded-md px-3 py-2">
            {['All','Laptop','PC','Accessories','Components'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={cond} onChange={e=>setCond(e.target.value)} className="border rounded-md px-3 py-2">
            {['All','New','Used'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="border rounded-xl p-4 bg-white shadow-soft flex flex-col">
            <div className="aspect-[4/3] bg-slate-100 rounded-md mb-3" />
            <div className="font-semibold text-slate-900">{p.name}</div>
            <div className="text-sm text-slate-500">{p.category} · {p.condition}</div>
            <div className="mt-2 font-bold text-brand">${Number(p.price).toFixed(2)}</div>
            <div className="mt-4 flex gap-2">
              <button onClick={()=>addToCart(p)} className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Add to Cart</button>
              <button onClick={()=>setActive(p)} className="px-4 py-2 rounded-md border border-slate-300">Details</button>
            </div>
          </div>
        ))}
      </div>
      <ProductModal product={active} onClose={()=>setActive(null)} onAddToCart={addToCart} />
    </div>
  )
}
