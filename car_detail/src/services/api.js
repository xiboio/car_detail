// Optional override for another server; defaults to the original local backend.
export const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '');

export async function request(path, options) {
  const response = await fetch(`${API_BASE}${path}`, options);
  if (!response.ok) throw new Error('Não foi possível concluir a solicitação. Tente novamente.');
  return response;
}
