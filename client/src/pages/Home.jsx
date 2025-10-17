import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold tracking-tight">TechFix Hub</motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg text-slate-300">Repair. Upgrade. Reuse.</motion.p>
            <div className="mt-8 flex gap-4">
              <Link to="/repair" className="px-5 py-3 rounded-md bg-brand hover:bg-brand-dark text-white shadow-soft">Book Repair</Link>
              <Link to="/shop" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/10">Shop Now</Link>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.15, duration:0.6}} className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-soft">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">1K+</div>
                <div className="text-sm text-slate-300">Repairs Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm text-slate-300">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8yrs</div>
                <div className="text-sm text-slate-300">Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">What we do</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Laptop Repair', desc: 'Screens, keyboards, batteries and more.' },
              { title: 'Custom PC Builds', desc: 'Gaming or productivity PCs tailored to you.' },
              { title: 'Data Recovery', desc: 'Recover files from faulty drives.' },
              { title: 'Second-hand Deals', desc: 'Quality refurbished laptops and PCs.' },
            ].map((s) => (
              <div key={s.title} className="p-5 rounded-xl border border-slate-200 shadow-soft hover:shadow transition bg-white">
                <div className="font-semibold text-slate-900">{s.title}</div>
                <div className="text-sm mt-2 text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Happy customers</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Alice J.', text: 'Fixed my laptop screen in a day!' },
              { name: 'Marcus P.', text: 'Great advice and amazing custom build.' },
              { name: 'Riya S.', text: 'Affordable used laptop in top condition.' },
            ].map((t) => (
              <div key={t.name} className="p-5 rounded-xl border border-slate-200 bg-white shadow-soft">
                <div className="text-slate-700">“{t.text}”</div>
                <div className="mt-3 text-sm font-medium text-slate-900">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
