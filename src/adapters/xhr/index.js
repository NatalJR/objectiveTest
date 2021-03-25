function getInitializer({ method }) {
  return {
    method,
    mode: 'cors',
    cache: 'default',
  }
}

export function get(url, params) {
  const uri = new URL(url)

  uri.search = new URLSearchParams({
    ...params,
    apikey: process.env.REACT_APP_API_KEY,
  }).toString()

  const initializer = getInitializer({ method: 'get' })
  return fetch(uri, initializer)
}

// export function post(url, requestData) {
//   const initializer = getInitializer()
//   return axios.post(url, requestData)
// }
