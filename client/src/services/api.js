const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const DEMO = (import.meta.env.VITE_DEMO_MODE || 'false') === 'true'

const demoProducts = [
  { id: 1, name: 'Refurbished ThinkPad T480', category: 'Laptop', condition: 'Used', price: 399.99 },
  { id: 2, name: 'Custom Gaming PC - Ryzen 5', category: 'PC', condition: 'New', price: 999.99 },
  { id: 3, name: 'Logitech MX Master 3S', category: 'Accessories', condition: 'New', price: 99.99 },
  { id: 4, name: 'Samsung 970 EVO 1TB NVMe', category: 'Components', condition: 'New', price: 79.99 },
]

export async function fetchProducts() {
  if (DEMO) return demoProducts
  const res = await fetch(`${API_URL}/api/products`)
  if (!res.ok) return demoProducts
  return res.json()
}

export async function submitRepair(payload) {
  if (DEMO) return { id: Date.now() }
  const res = await fetch(`${API_URL}/api/repairs`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function submitMessage(payload) {
  if (DEMO) return { id: Date.now() }
  const res = await fetch(`${API_URL}/api/messages`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function fetchRepairs() {
  if (DEMO) return []
  const res = await fetch(`${API_URL}/api/repairs`)
  return res.ok ? res.json() : []
}

export async function fetchMessages() {
  if (DEMO) return []
  const res = await fetch(`${API_URL}/api/messages`)
  return res.ok ? res.json() : []
}

export async function login(payload) {
  if (DEMO) return { token: 'demo' }
  const res = await fetch(`${API_URL}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) throw new Error('Failed login')
  return res.json()
}

export function adminApi(token) {
  return {
    async post(path, body) {
      const res = await fetch(`${API_URL}/api/admin${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error('Failed')
      return res.json()
    },
    async put(path, body) {
      const res = await fetch(`${API_URL}/api/admin${path}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error('Failed')
      return res.json()
    },
    async delete(path) {
      const res = await fetch(`${API_URL}/api/admin${path}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) throw new Error('Failed')
      return res.json()
    },
  }
}
