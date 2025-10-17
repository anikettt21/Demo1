export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">About Us</h1>
      <p className="mt-2 text-slate-700">We are a local team with over 10 years of experience in laptop and PC repairs. Our mission is to extend the life of technology through expert repair, responsible upgrades, and quality second-hand sales.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1,2,3].map((i) => (
          <img key={i} src={`https://images.unsplash.com/photo-15${70+i}336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop`} alt="workspace" className="h-48 w-full rounded object-cover" />
        ))}
      </div>
    </div>
  )
}
