import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold md:text-5xl">
            TechFix Hub
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-3 text-lg text-blue-100">
            Repair. Upgrade. Reuse.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-6 flex gap-3">
            <Link to="/services" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-blue-50">
              Book Repair
            </Link>
            <Link to="/shop" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { title: 'Laptop Repair', desc: 'Screen, battery, keyboard, and more.' },
            { title: 'Custom PC Builds', desc: 'Tailored to your needs.' },
            { title: 'Data Recovery', desc: 'Recover lost files safely.' },
            { title: 'Second-hand Deals', desc: 'Quality tested devices.' },
          ].map((s) => (
            <div key={s.title} className="rounded-lg border bg-white p-5 shadow-sm">
              <div className="text-lg font-semibold text-slate-900">{s.title}</div>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">Testimonials</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { name: 'Ava', text: 'Quick and reliable repair!' },
              { name: 'Leo', text: 'Love my custom PC build.' },
              { name: 'Mia', text: 'Great deals on used laptops.' },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-slate-700">“{t.text}”</p>
                <footer className="mt-3 text-sm font-semibold text-slate-900">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
