import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <span className="text-lg font-bold text-slate-900">TechFix Hub</span>
          </div>
          <p className="text-sm text-slate-600">Repair. Upgrade. Reuse.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-slate-900">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@techfixhub.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Main St, Your City</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-slate-900">Hours</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Mon - Fri: 10:00 - 19:00</li>
            <li>Sat: 11:00 - 17:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-slate-900">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><a href="/shop" className="hover:text-blue-600">Shop</a></li>
            <li><a href="/services" className="hover:text-blue-600">Repair Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} TechFix Hub</div>
    </footer>
  )
}
