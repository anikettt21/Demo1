export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="text-lg font-semibold text-slate-900">TechFix Hub</div>
          <p className="mt-2">Repair. Upgrade. Reuse.</p>
          <p className="mt-2">123 Main Street, Springfield</p>
          <p>Mon-Fri: 9am - 6pm, Sat: 10am - 4pm</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Contact</div>
          <p className="mt-2">Phone: (555) 123-4567</p>
          <p>Email: hello@techfixhub.local</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/shop" className="hover:text-brand">Shop</a></li>
            <li><a href="/repair" className="hover:text-brand">Book a Repair</a></li>
            <li><a href="/about" className="hover:text-brand">About Us</a></li>
            <li><a href="/contact" className="hover:text-brand">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TechFix Hub. All rights reserved.
      </div>
    </footer>
  )
}
