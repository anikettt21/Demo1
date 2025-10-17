import { useEffect, useState } from 'react'

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [products, setProducts] = useState([])
  const [repairs, setRepairs] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('tfh_admin')
    setAuthed(Boolean(token))
    const localProducts = JSON.parse(localStorage.getItem('tfh_products') || '[]')
    const localRepairs = JSON.parse(localStorage.getItem('tfh_repairs') || '[]')
    const localMessages = JSON.parse(localStorage.getItem('tfh_messages') || '[]')
    setProducts(localProducts)
    setRepairs(localRepairs)
    setMessages(localMessages)
  }, [])

  if (!authed) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Admin</h1>
        <p className="mt-2 text-slate-700">Please login to view the dashboard.</p>
        <a className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white" href="/admin/login">Go to Login</a>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-slate-900">Products</h2>
        <div className="mt-2 overflow-hidden rounded-md border">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Category</th>
                <th className="px-3 py-2 text-left">Condition</th>
                <th className="px-3 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="odd:bg-white even:bg-slate-50">
                  <td className="px-3 py-2">{p.name}</td>
                  <td className="px-3 py-2">{p.category}</td>
                  <td className="px-3 py-2">{p.condition}</td>
                  <td className="px-3 py-2">${p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-slate-900">Repair Requests</h2>
        <ul className="mt-2 divide-y rounded-md border bg-white">
          {repairs.map((r) => (
            <li key={r.id} className="p-3 text-sm">
              <div className="font-semibold">{r.customer_name} — {r.device_type}</div>
              <div className="text-slate-600">{r.problem}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-slate-900">Messages</h2>
        <ul className="mt-2 divide-y rounded-md border bg-white">
          {messages.map((m) => (
            <li key={m.id} className="p-3 text-sm">
              <div className="font-semibold">{m.name} — {m.email}</div>
              <div className="text-slate-600">{m.message}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
