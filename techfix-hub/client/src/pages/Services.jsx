import { useState } from 'react'
import { api } from '../services/api'

export default function Services() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    device_type: 'Laptop',
    problem: '',
    image_url: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await api.createRepair(form)
    if (res) setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Repair Services</h1>
      <p className="mt-1 text-slate-600">Request a repair and we will get back to you.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-lg border bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.customer_name} onChange={(e) => setForm({ ...form, customer_name: e.target.value })} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Device Type</label>
          <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.device_type} onChange={(e) => setForm({ ...form, device_type: e.target.value })}>
            {['Laptop', 'PC', 'Other'].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700">Problem Description</label>
          <textarea rows="4" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.problem} onChange={(e) => setForm({ ...form, problem: e.target.value })} required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700">Image URL (optional)</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Submit Request</button>
        </div>
        {submitted && <p className="md:col-span-2 text-sm text-emerald-600">Submitted! We'll contact you shortly.</p>}
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Services Offered</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            'Motherboard repair',
            'Screen replacement',
            'OS installation',
            'SSD/RAM upgrades',
            'Virus removal',
            'Data recovery',
          ].map((s) => (
            <li key={s} className="rounded-md border bg-white p-4 text-sm text-slate-700 shadow-sm">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
