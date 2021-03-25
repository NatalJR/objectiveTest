import { get, BASE_API_URL } from 'adapters/xhr'

export const getCharacters = async ({ page = 1, limit = 10, etag } = {}) => {
  const offset = limit * (page - 1)
  const params = { limit }
  if (offset) {
    params.offset = offset
  }
  try {
    const response = await get(`${BASE_API_URL}/characters`, params, etag)
    const responseJson = await response.json()
    const data = responseJson.data
    return data
  } catch {
    return null
  }
}
