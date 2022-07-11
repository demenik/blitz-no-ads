import fetch from "node-fetch"

export default async function fetchWebSocketUrl(port) {
  const res = await fetch(`http://localhost:${port}/json`)
  const data = await res.json()

  /** @type {string[]} */
  const webSocketDebuggerUrls = data.map((x) => x.webSocketDebuggerUrl)

  return webSocketDebuggerUrls
}