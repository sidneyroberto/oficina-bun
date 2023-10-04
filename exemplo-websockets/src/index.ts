Bun.serve({
  port: 3000,
  fetch(req, server) {
    const success = server.upgrade(req)
    return success ? undefined : new Response('Server upgrade error', { status: 500})
  },
  websocket: {
    open(ws) {
      setInterval(async () => {
        const url = `${Bun.env.API_URL}${Bun.env.PRICE_ENDPOINT}?`
        const params = new URLSearchParams({
          vs_currency: `${Bun.env.VS_CURRENCY}`,
          ids: `${Bun.env.COIN_ID}`
        })
        const response = await fetch(url + params)
        const data = await response.json()
        const price = data[0]?.current_price
        console.log(price)
        ws.send(price ? price : 'No price')
      }, 5000)
    },
    message(ws, message) {}
  }
})