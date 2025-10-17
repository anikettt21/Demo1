import { useEffect, useState } from 'react'
import { adminApi, fetchMessages, fetchProducts, fetchRepairs, login } from '../services/api'

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [cred, setCred] = useState({ username:'', password:'' })
  const [products, setProducts] = useState([])
  const [repairs, setRepairs] = useState([])
  const [messages, setMessages] = useState([])
  const [newProduct, setNewProduct] = useState({ name:'', category:'Laptop', condition:'New', price:'', description:'', image_url:'' })

  useEffect(() => {
    if (token) {
      Promise.all([fetchProducts(), fetchRepairs(), fetchMessages()]).then(([p,r,m])=>{
        setProducts(p); setRepairs(r); setMessages(m)
      })
    }
  }, [token])

  const onLogin = async (e) => {
    e.preventDefault()
    const res = await login(cred)
    setToken(res.token)
    localStorage.setItem('token', res.token)
  }

  const addProduct = async (e) => {
    e.preventDefault()
    await adminApi(token).post('/products', newProduct)
    setNewProduct({ name:'', category:'Laptop', condition:'New', price:'', description:'', image_url:'' })
    const p = await fetchProducts(); setProducts(p)
  }

  const deleteProduct = async (id) => {
    await adminApi(token).delete(`/products/${id}`)
    const p = await fetchProducts(); setProducts(p)
  }

  const updateRepairStatus = async (id, status) => {
    await adminApi(token).put(`/repairs/${id}`, { status })
    const r = await fetchRepairs(); setRepairs(r)
  }

  const deleteMessage = async (id) => {
    await adminApi(token).delete(`/messages/${id}`)
    const m = await fetchMessages(); setMessages(m)
  }

  if (!token) {
    return (
      <div className="mx-auto max-w-sm px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <form onSubmit={onLogin} className="mt-6 grid gap-4">
          <input name="username" value={cred.username} onChange={e=>setCred({...cred, username:e.target.value})} placeholder="Username" className="border rounded-md px-3 py-2" />
          <input type="password" name="password" value={cred.password} onChange={e=>setCred({...cred, password:e.target.value})} placeholder="Password" className="border rounded-md px-3 py-2" />
          <button className="px-4 py-2 rounded-md bg-brand text-white w-fit">Login</button>
      </form>
      <div className="text-sm text-slate-600 mt-2">Default: owner / techfix123</div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={()=>{localStorage.removeItem('token'); setToken('')}} className="text-sm text-slate-600 underline">Logout</button>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Add Product</h2>
        <form onSubmit={addProduct} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={newProduct.name} onChange={e=>setNewProduct({...newProduct, name:e.target.value})} placeholder="Name" className="border rounded-md px-3 py-2" required />
          <select value={newProduct.category} onChange={e=>setNewProduct({...newProduct, category:e.target.value})} className="border rounded-md px-3 py-2">
            {['Laptop','PC','Accessories','Components'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={newProduct.condition} onChange={e=>setNewProduct({...newProduct, condition:e.target.value})} className="border rounded-md px-3 py-2">
            {['New','Used'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input type="number" step="0.01" value={newProduct.price} onChange={e=>setNewProduct({...newProduct, price:e.target.value})} placeholder="Price" className="border rounded-md px-3 py-2" required />
          <input value={newProduct.image_url} onChange={e=>setNewProduct({...newProduct, image_url:e.target.value})} placeholder="Image URL" className="border rounded-md px-3 py-2" />
          <textarea value={newProduct.description} onChange={e=>setNewProduct({...newProduct, description:e.target.value})} placeholder="Description" rows={3} className="border rounded-md px-3 py-2 md:col-span-2" />
          <button className="px-4 py-2 rounded-md bg-brand text-white w-fit">Add</button>
        </form>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">Products ({products.length})</h3>
          <div className="mt-3 space-y-2 max-h-80 overflow-auto">
            {products.map(p => (
              <div key={p.id} className="p-3 border rounded-md flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.category} · {p.condition} · ${Number(p.price).toFixed(2)}</div>
                </div>
                <button className="text-xs text-red-600" onClick={()=>deleteProduct(p.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Repairs ({repairs.length})</h3>
          <div className="mt-3 space-y-2 max-h-80 overflow-auto">
            {repairs.map(r => (
              <div key={r.id} className="p-3 border rounded-md">
                <div className="font-medium">{r.customer_name} — {r.device_type}</div>
                <div className="text-xs text-slate-500">{r.phone}</div>
                <div className="mt-2">
                  <select value={r.status} onChange={(e)=>updateRepairStatus(r.id, e.target.value)} className="border rounded px-2 py-1 text-xs">
                    {['received','in_progress','ready','delivered'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Messages ({messages.length})</h3>
          <div className="mt-3 space-y-2 max-h-80 overflow-auto">
            {messages.map(m => (
              <div key={m.id} className="p-3 border rounded-md flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.email}</div>
                  <div className="text-sm mt-1">{m.message}</div>
                </div>
                <button className="text-xs text-red-600" onClick={()=>deleteMessage(m.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
