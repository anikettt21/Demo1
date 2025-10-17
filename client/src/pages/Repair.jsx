import { useState } from 'react'
import { submitRepair } from '../services/api'

export default function Repair() {
  const [form, setForm] = useState({ customer_name:'', phone:'', email:'', device_type:'Laptop', problem:'', image:null })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    let image_url = ''
    try {
      if (form.image) {
        const fd = new FormData()
        fd.append('file', form.image)
        const upRes = await fetch(`${import.meta.env.VITE_API_URL}/api/uploads`, { method: 'POST', body: fd })
        const up = await upRes.json()
        image_url = up.url || ''
      }
      await submitRepair({ ...form, image_url })
      setStatus('Submitted! We will contact you soon.')
      setForm({ customer_name:'', phone:'', email:'', device_type:'Laptop', problem:'', image:null })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold">Book a Repair</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="customer_name" value={form.customer_name} onChange={onChange} placeholder="Full name" className="border rounded-md px-3 py-2" required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border rounded-md px-3 py-2" required />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="border rounded-md px-3 py-2" />
        </div>
        <select name="device_type" value={form.device_type} onChange={onChange} className="border rounded-md px-3 py-2">
          {['Laptop','PC','Other'].map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <textarea name="problem" value={form.problem} onChange={onChange} placeholder="Describe the issue" rows={4} className="border rounded-md px-3 py-2" required />
        <input type="file" accept="image/*" onChange={(e)=>setForm(f=>({...f, image:e.target.files?.[0] || null}))} />
        <button className="px-4 py-2 rounded-md bg-brand text-white w-fit">Submit</button>
        {status && <div className="text-sm text-slate-600">{status}</div>}
      </form>

      <div className="mt-12 grid gap-4">
        <h2 className="text-xl font-semibold">Services we offer</h2>
        <ul className="list-disc ml-5 text-slate-700">
          <li>Motherboard repair</li>
          <li>Screen replacement</li>
          <li>Battery and keyboard replacement</li>
          <li>OS installation and cleanup</li>
          <li>Data recovery</li>
        </ul>
      </div>
    </div>
  )
}
