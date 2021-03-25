function getInitializer({ method, etag }) {
  return {
    method,
    mode: 'cors',
    cache: 'default',
    headers: {
      'If-None-Match': etag,
    },
  }
}

export function get(url, params, etag) {
  const uri = new URL(url)

  uri.search = new URLSearchParams({
    ...params,
    apikey: process.env.REACT_APP_API_KEY,
  }).toString()

  const initializer = getInitializer({ method: 'get', etag })
  return fetch(uri, initializer)
}

export const BASE_API_URL = process.env.REACT_APP_API_URL
