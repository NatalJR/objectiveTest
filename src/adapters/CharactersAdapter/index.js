import { get, BASE_API_URL } from 'adapters/xhr'

export async function getCharacters({ page = 1, limit = 10, etag } = {}) {
  const offset = limit * (page - 1)
  const params = { offset, limit }
  let characters
  try {
    const response = await get(`${BASE_API_URL}/characters`, params, etag)
    characters = await response.json()
  } catch {
    characters = null
  }

  return characters
}
