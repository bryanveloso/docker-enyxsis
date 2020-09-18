const express = require('express')
const net = require('net')
const cors = require('cors')

const {
  CHAR_IP,
  CHAR_PORT = 6121,
  LOGIN_IP,
  LOGIN_PORT = 6900,
  MAP_IP,
  MAP_PORT = 5121,
} = process.env

const checkPort = (port, host) => {
  let result = null
  try {
    const client = new net.Socket()
    client.connect(port, host)
    result = true
    client.destroy()
  } catch (e) {
    result = false
  }

  return result
}

const app = express()
app.use(cors())

app.get('/', (req, res, next) => {
  const login = checkPort(LOGIN_PORT, LOGIN_IP)
  const char = checkPort(CHAR_PORT, CHAR_IP)
  const map = checkPort(MAP_PORT, MAP_IP)
  res.json({ status: { login, char, map } })
})

const port = process.env.PORT || 3030
app.listen(port, function () {
  console.log(`Status listening on port ${port}!`)
})
