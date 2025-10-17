export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold">About TechFix Hub</h1>
      <p className="mt-4 text-slate-700">We started as a small workshop and have grown into a trusted local repair and sales shop. Our mission is to extend the life of technology through expert repairs, thoughtful upgrades, and quality refurbished devices.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="aspect-[4/3] bg-slate-200 rounded-xl" />
        <div className="aspect-[4/3] bg-slate-200 rounded-xl" />
      </div>
    </div>
  )
}
