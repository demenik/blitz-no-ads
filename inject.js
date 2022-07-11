import WebSocket from "ws"
import fetchWebSocketUrls from "./util/fetchWebSocketUrls.js"
import loadFile from "./util/loadFile.js";

// fixes https://stackoverflow.com/questions/72390154
import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

const fileData = loadFile("./static/render.js")

console.log("Fetching webSocketDebuggerUrl")

/** @type {string} */
const PORT = process.argv[2]

const webSocketDebuggerUrls = await fetchWebSocketUrls(PORT)
console.log("Found", webSocketDebuggerUrls.length, "webSocketDebuggerUrls")

webSocketDebuggerUrls.forEach((url, idx) => {
  console.log(`Connecting to '${url}'`)
  const ws = new WebSocket(url)

  function openHandler() {
    console.log("Connected")

    const payload = {
      'id': parseInt(`${PORT}${idx}`),
      "method": "Runtime.evaluate",
      "params": {
        'expression': fileData,
      }
    }

    ws.send(JSON.stringify(payload), (err) => {
      if (err) console.log("Error sending payload", err)

      console.log("Sent payload")

      ws.close()
      ws.removeEventListener("open", openHandler)
      ws.removeEventListener("error", errorHandler)
    })
  }

  function errorHandler(err) {
    console.log("Error:", err)
  }

  ws.addEventListener("error", errorHandler)

  ws.addEventListener("open", openHandler)
})