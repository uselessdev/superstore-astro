type RequestArgs = {
  path: string
  method?: 'GET' | 'POST' | 'PUT'
  body?: any
}

export async function request({ path, method = 'GET', body }: RequestArgs) {
  const result = await fetch(`https://www.lojinha.dev/api/${path}`, {
    method,
    headers: {
      Authorization: 'pk_2Uagwp3qAATdA6QPCArWSHZYf3rEEtdi9SaGvrmGQLS9xM',
    },
    body
  })

  if (result.ok) {
    return result.json();
  }

  throw Error(`❌ Something get wrong: ${result.statusText}`)
}
