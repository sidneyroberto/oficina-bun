const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url)
    if (req.method === 'GET' && url.pathname === '/hash') {
      const word = url.searchParams.get('word')
      if (word) {
        const hash = Bun.hash(word)
        return Response.json({ hash: hash.toString() })
      }

      return new Response('No word informed', { status: 400 })
    }

    if (req.method === 'GET' && url.pathname === '/hash/check') {
      const word = url.searchParams.get('word')
      const hash = url.searchParams.get('hash')
      if (word && hash) {
        const isMatch = hash === Bun.hash(word).toString()
        return Response.json({ isMatch })
      }

      return new Response('No word or hash informed', { status: 400 })
    }

    if (req.method === 'GET' && url.pathname === '/password') {
      const word = url.searchParams.get('word')
      if (word) {
        const hash = await Bun.password.hash(word)
        return Response.json({ hash })
      }

      return new Response('No word informed', { status: 400 })
    }

    return new Response('Simple API')
  }
})

console.log(`App running on port ${server.port}`)