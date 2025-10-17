const API_BASE = import.meta.env.VITE_API_URL || `${window.location.origin}`

async function tryFetch(url, options) {
  try {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error('Request failed')
    return await res.json()
  } catch (e) {
    return { error: e.message }
  }
}

export const api = {
  async listProducts() {
    const data = await tryFetch(`${API_BASE}/api/products`)
    if (!data || data.error) {
      // fallback to local demo data
      const products = await import('../data/products.json')
      return products.default
    }
    return data
  },
  async createRepair(payload) {
    const res = await tryFetch(`${API_BASE}/api/repairs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res && !res.error) return res
    const local = JSON.parse(localStorage.getItem('tfh_repairs') || '[]')
    const next = { id: Date.now(), ...payload, created_at: new Date().toISOString() }
    local.push(next)
    localStorage.setItem('tfh_repairs', JSON.stringify(local))
    return next
  },
  async createMessage(payload) {
    const res = await tryFetch(`${API_BASE}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res && !res.error) return res
    const local = JSON.parse(localStorage.getItem('tfh_messages') || '[]')
    const next = { id: Date.now(), ...payload, created_at: new Date().toISOString() }
    local.push(next)
    localStorage.setItem('tfh_messages', JSON.stringify(local))
    return next
  },
}
