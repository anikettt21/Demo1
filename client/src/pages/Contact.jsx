import { useState } from 'react'
import { submitMessage } from '../services/api'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await submitMessage(form)
      setStatus('Message sent! We will reply soon.')
      setForm({ name:'', email:'', message:'' })
    } catch {
      setStatus('Failed to send. Try again.')
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-700">We would love to hear from you.</p>
        <div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
          <iframe title="map" src="https://www.google.com/maps?q=New+York&output=embed" className="w-full h-64"></iframe>
        </div>
        <div className="mt-4 text-sm text-slate-600">
          123 Main Street, Springfield · Mon-Fri 9am-6pm · (555) 123-4567
        </div>
      </div>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="border rounded-md px-3 py-2" required />
        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="border rounded-md px-3 py-2" required />
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} className="border rounded-md px-3 py-2" required />
        <button className="px-4 py-2 rounded-md bg-brand text-white w-fit">Send</button>
        {status && <div className="text-sm text-slate-600">{status}</div>}
      </form>
    </div>
  )
}
