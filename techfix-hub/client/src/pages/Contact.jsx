import { useState } from 'react'
import { api } from '../services/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await api.createMessage(form)
    if (res) setSent(true)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Contact</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <div className="aspect-video overflow-hidden rounded">
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509611!2d144.95373631531594!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3b6da3df!2sVictoria!5e0!3m2!1sen!2sau!4v1611819647356!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
          <div className="mt-3 text-sm text-slate-700">
            <div>Phone: +1 (555) 123-4567</div>
            <div>Email: support@techfixhub.com</div>
            <div>Hours: Mon-Fri 10-19, Sat 11-17</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          </div>
          <button className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Send Message</button>
          {sent && <p className="mt-2 text-sm text-emerald-600">Message sent. We'll reply soon!</p>}
        </form>
      </div>
    </div>
  )
}
