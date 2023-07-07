type RequestArgs = {
  path: string
  method?: 'GET' | 'POST' | 'PUT'
}

export async function request({ path, method = 'GET' }: RequestArgs) {
  const result = await fetch(`${import.meta.env.LOJINHA_API_URL}/api/${path}`, {
    method,
    headers: {
      Authorization: import.meta.env.LOJINHA_API_KEY,
    }
  })

  if (result.ok) {
    return result.json();
  }

  throw Error(`❌ Something get wrong: ${result.statusText}`)
}
