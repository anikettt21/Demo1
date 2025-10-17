import { useState } from 'react'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    // Demo auth: env or defaults
    const envUser = import.meta.env.VITE_ADMIN_USER || 'admin'
    const envPass = import.meta.env.VITE_ADMIN_PASS || 'password'
    if (username === envUser && password === envPass) {
      localStorage.setItem('tfh_admin', 'true')
      window.location.href = '/admin'
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-3 rounded-lg border bg-white p-6 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-slate-700">Username</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <input type="password" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Login</button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </div>
  )
}
